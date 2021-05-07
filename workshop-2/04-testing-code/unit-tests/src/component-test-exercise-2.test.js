/* eslint-disable import/first */
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
 * Exercise 2
 *
 * In this exercise, similarly to the second exercise in the
 * unit.test.js, a component needs to be created based
 * on existing tests.
 * =======
 */
import { mount } from "enzyme"
import { PropTypes } from '@dhis2/prop-types'
import React from "react"

/**
 * This component will render a list of data elements
 * provided through the props
 */
const ExerciseTwoComponent = ({ dataElements }) => {}

ExerciseTwoComponent.propTypes = {
  dataElement: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      displayName: PropTypes.string.isRequired,
    })
  )
}

describe('Implement the component for the following tests', () => {
  const dataElements = [
    { id: 'id1', displayName: 'Data element 1' },
    { id: 'id2', displayName: 'Data element 2' },
    { id: 'id3', displayName: 'Data element 3' },
    { id: 'id4', displayName: 'Data element 4' },
  ]

  it('should have a "li" for every data element', () => {
    // @TODO: Uncomment the code
    // const component = mount(
    //   <ExerciseTwoComponent dataElements={dataElements} />
    // )
  
    // const dataElementLiElements = component.find('li.data-element')
    // expect(dataElementLiElements.length).toBe(dataElements.length)
  })

  it('should use the id as key on each li element', () => {
    // @TODO: Uncomment the code
    // const component = mount(
    //   <ExerciseTwoComponent dataElements={dataElements} />
    // )
    // const dataElementLiElements = component.find('li.data-element')
  
    // dataElementLiElements.forEach((element, index) => {
    //   expect(element.key()).toBe(dataElements[index].id)
    // })
  })
})
