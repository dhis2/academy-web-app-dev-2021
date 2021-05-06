/*
 * @param {Object} instance
 * @returns {string}
 */
export function getLabelByType(instance) {
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

describe('getLabelByType', () => {
  it('should return "Premium tier" when the type is "top"', () => {})

  it('should return "Top tier" when the type is "mid"', () => {})

  it('should return "Value tier" when the type is "low"', () => {})

  it('should return the type itself for any other type', () => {})
})
