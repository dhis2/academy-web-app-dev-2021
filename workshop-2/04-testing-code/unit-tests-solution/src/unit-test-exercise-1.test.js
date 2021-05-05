/*
 * This is the function that will be tested in this file.
 * @param {Object} instance
 * @returns {string}
 */
function getLabelByType(instance) {
  // if instance if not an object
  // or if the type property is missing
  if (typeof instance.type === 'undefined') {
    throw new Error(`No "type" property on instance, instance is of type ${typeof instance}.`)
  }

  if (instance.type === 'top') {
    return 'Premium tier'
  }

  if (instance.type === 'mid') {
    return 'Top tier'
  }

  if (instance.type === 'low') {
    return 'Value tier'
  }

  const unusable = instance.unusable
  if (instance.type === 'broken' && unusable) {
    return "Handyman's version (for desperates)"
  }

  if (instance.type === 'broken') {
    return "Handyman's version"
  }

  return instance.type
}

/**
 * =======
 * Exercise 1
 *
 * This exercise is the exercise that was shown during the presentation.
 * You can have a loot at the slides if you want to see them.
 * One `it` block already has the solution as it was demonstrated as well.
 * =======
 */

describe('getLabelByType - Exercise 1', () => {
  // Solution from presentation
  it('should return the premium label when the type is "top"', () => {
    const actual = getLabelByType({ type: 'top' })
    const expected = 'Premium tier'
    expect(actual).toBe(expected)

    // alternative, shorter, implementation:
    expect(getLabelByType({ type: 'top' })).toBe('Premium tier')
  })

  it('should return the top tier label when the type is "mid"', () => {
    const actual = getLabelByType({ type: 'mid' })
    const expected = 'Top tier'
    expect(actual).toBe(expected)
  })

  it('should return the value tier label when the type is "low"', () => {
    const actual = getLabelByType({ type: 'low' })
    const expected = 'Value tier'
    expect(actual).toBe(expected)
  })

  it('should return the type value if the type is unknown', () => {
    const actual = getLabelByType({ type: 'unknown-type' })
    const expected = 'unknown-type'
    expect(actual).toBe(expected)
  })

  // BONUS step!
  it('should throw an error if the argument is not an object', () => {
    // The following docs: https://jestjs.io/docs/en/expect#tothrowerror
    // contain information how to handle errors/exceptions
    const aFunctionThatShouldThrow = () => getLabelByType("I don't have a type property")
    expect(aFunctionThatShouldThrow).toThrow(Error)
  })
})
