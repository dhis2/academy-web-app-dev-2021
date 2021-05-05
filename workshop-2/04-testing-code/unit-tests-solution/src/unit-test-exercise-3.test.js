/**
 * =======
 * Exercise 3
 *
 * In this exercise you need to check if the callback has been called the 
 * correct amount of times and if it has been provided with the specified
 * or default payload
 *
 * In order to get this done, you need to read about test setup and teardown.
 * You can find the docs here: https://jestjs.io/docs/en/setup-teardown
 * =======
 */
const callback = jest.fn()

const thirdExerciseFunction = (callback, times, payload = {}) => {
  for (let i = 0; i < times; i = i + 1) {
    callback(payload)
  }
}

describe('Test how many times the callback has been called', () => {
  afterEach(() => {
    callback.mockClear()
  })

  it('should call the callback 5 times with a defined payload', () => {
    const payload = { key: 'value' }
    const times = 5

    thirdExerciseFunction(callback, times, payload)

    expect(callback).toHaveBeenCalledTimes(5)
    expect(callback).toHaveBeenCalledWith(payload)
  })

  it('should call the callback 5 times with the default payload', () => {
    const times = 5

    thirdExerciseFunction(callback, times)

    expect(callback).toHaveBeenCalledTimes(5)
    expect(callback).toHaveBeenCalledWith({})
  })
})
