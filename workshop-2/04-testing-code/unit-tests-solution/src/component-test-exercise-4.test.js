/**
 * This needs to be done.
 * Normally this would be done in the src/setupTests.js
 * For more information, please have a look a the docs:
 * https://enzymejs.github.io/enzyme/docs/installation/react-16.html
 */
import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

/**
 * ========
 * Exercise 4
 *
 * In this exercise you need to make sure that specific props are passed to
 * another component that's rendered by the outer component
 *
 * NOTE:
 *   This test uses "shallow", not "mount", which is important for this test to
 *   work. You can have a look at the difference between those two in the docs:
 *
 *   * Shallow rendering: https://enzymejs.github.io/enzyme/docs/api/shallow.html
 *   * Full rendering: https://enzymejs.github.io/enzyme/docs/api/mount.html
 * ========
 */
import { mount, shallow } from 'enzyme'
import { PropTypes } from '@dhis2/prop-types'
import React from "react"

const InnerComponent = ({ option, onClick }) => {
  return (
    <div onClick={onClick} className="inner">
      {option.label}:<br />
      {option.value}
    </div>
  )
}

InnerComponent.propTypes = {
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
}

const OuterComponent = ({ label, value, onClick }) => {
  const option = { label, value }

  return (
    <div>
      <InnerComponent option={option} onClick={onClick} />
    </div>
  )
}

OuterComponent.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

describe('Some props should be passed down to other components', () => {
  it('should pass an option object to InnerComponent', () => {
    const expected = { label: 'This is the label', value: 'i-am-the-value' }
    const mounted = shallow(
      <OuterComponent
        label="This is the label"
        value="i-am-the-value"
      />
    )

    const inner = mounted.find(InnerComponent)
    expect(inner.props().option).toEqual(expected)
  })

  it('should call the provided onClick funciton when clicking the div of InnerComponent', () => {
    const onClick = jest.fn()
    const expected = onClick
    const mounted = mount(
      <OuterComponent
        label="This is the label"
        value="i-am-the-value"
        onClick={onClick}
      />
    )

    const inner = mounted.find('.inner')
    inner.simulate('click')
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
