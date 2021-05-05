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
 * Exercise 3
 *
 * In this exercise the component that should be tested is using
 * React's context. In order to see if the component produces the right
 * output, the context value has to be overwritten.
 * =======
 */
import { mount } from "enzyme"
import { PropTypes } from '@dhis2/prop-types'
import React, { useContext } from "react"

// This context will have the default value: { language: 'English' }
const ExerciseThreeContext = React.createContext({ language: 'English' })

const ExerciseThreeComponent = () => {
  // Gets the context's value
  // If none has been set explicitly, the default value will be provided
  const { language } = useContext(ExerciseThreeContext)

  return (
    <p>
      The current language is:<br />
      <span className="language">{language}</span>
    </p>
  )
}

describe(
  'The component needs to display what is provided through context',
  () => {
    it('should display the default language when no value has been provided', () => {
      const mounted = mount(<ExerciseThreeComponent />)
      const languageSpan = mounted.find('.language')
      expect(languageSpan.text()).toBe('English')
    })

    it('should display the "German" language when the context has that value', () => {
      // Set a conext value, in this case an object with the language set to "German",
      // by wrapping the component with the context's Provider component
      const mounted = mount(
        <ExerciseThreeContext.Provider value={{ language: 'German' }}>
          <ExerciseThreeComponent />
        </ExerciseThreeContext.Provider>
      )

      const languageSpan = mounted.find('.language')
      expect(languageSpan.text()).toBe('German')
    })
  }
)
