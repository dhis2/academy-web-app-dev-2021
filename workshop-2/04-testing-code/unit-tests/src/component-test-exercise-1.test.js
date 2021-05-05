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
 * =======
 * Exercise 1
 *
 * In this exercise an existing component should be covered with tests.
 * The individual `it`-blocks already exist but lack the testing-code.
 * =======
 */
import { mount } from "enzyme"
import { PropTypes } from '@dhis2/prop-types'
import React from "react"

/**
 * Just a very simple component
 * that will always render the same content
 */
const SpanComponent = () => <span className="i-am-a-span">Text!</span>

/**
 * This component renders as many `SpanComponent`s as instructed
 * By providing the `spanCount` prop, the amount of `SpanComponent`s can
 * be controlled
 *
 * <Component spanCount={4} /> will render four `SpanComponent`s
 */
const ExerciseOneComponent = props => {
  const { spanCount, className } = props
  const spans = []

  // This loop will iterate "spanCount" times
  for (let i = 0;
       i < spanCount;
       i = i + 1
  ) {
    // In every iteration, a "SpanComponent" is added to the "spans" array
    // The "key" prop is required by react when using arrays of components.
    const span = <SpanComponent key={i} />
    spans.push(span)
  }

  // The container will have the class name that's provided through the props
  // If "prop.className" is undefined (because it wasn't provided), no
  // class name will be added to the div
  return (
    <div className={props.className}>
      {// Render all spans in the array
        spans}
    </div>
  )
}

ExerciseOneComponent.propTypes = {
  spanCount: PropTypes.number.isRequired,
  className: PropTypes.string,
}

describe("Component tests", () => {
  it("shoud render three spans when the spanCount is 3", () => {})

  it('should add the class "container" to the component\'s container element', () => {})
})
