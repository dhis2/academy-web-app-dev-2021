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

  return instance.type
}

/**
 * =======
 * Exercise 2
 * =======
 *
 * TODO: You have to uncomment the following tests!
 *
 * This exercise is about getting a sense for Test Driven Development (TDD).
 * That means that tests are being written before the actual code.
 * In this case the tests already exist, only the functionality of
 * the `getLabelByType` function has to be extended.
 */
describe('getLabelByType - Exercise 2', () => {
  /*
   * This test covers the type "broken"
   */
  it('should return the broken tier label when type if "broken"', () => {
    // @TODO: Uncomment the code
    // const actual = getLabelByType({ type: 'broken' })
    // const expected = 'Handyman\'s version'
    // expect(actual).toBe(expected)
  })

  /*
   * This test covers the "unusable" flag
   */
  it('should respect the unusable flag on the object', () => {
    // @TODO: Uncomment the code
    // const withoutFlag = getLabelByType({ type: 'broken' })
    // expect(withoutFlag).toBe('Handyman\'s version')
  
    // const withFalsyFlag = getLabelByType({ type: 'broken', unusable: false })
    // expect(withFalsyFlag).toBe('Handyman\'s version')
  
    // const withTruthyFlag = getLabelByType({ type: 'broken', unusable: true })
    // expect(withTruthyFlag).toBe('Handyman\'s version (for desperates)')
  })
})
