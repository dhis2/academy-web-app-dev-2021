/* eslint-disable import/first */
/**
 * ========
 * Exercise 4
 *
 * You can take a look at the documentation of the React Hooks testing library:
 * https://react-hooks-testing-library.com/usage/advanced-hooks
 *
 * Your task is to implement the actual hook based on the test code
 * ========
 */
import { renderHook, act } from '@testing-library/react-hooks'
import { useState } from 'react'

// TODO: Implement the hook's funcitonality
const useCounter = () => {}

describe('Testing a simple react hook', () => {
  it('should return the same counter that\'s provided initially', () => {
    // @TODO: Uncomment the code
    // const { result } = renderHook(() => useCounter(3))
    // expect(result.current.counter).toBe(3)
  })

  it('should increment the counter when calling the increment function', async () => {
    // @TODO: Uncomment the code
    // const { result, waitForNextUpdate } = renderHook(() => useCounter(0))
    // expect(result.current.counter).toBe(0)

    // // with "act" we can proceed the asynchronous hook
    // await act(async () => {
    //   result.current.increment()

    //   // This will wait until the hook has returned different values
    //   await waitForNextUpdate()

    //   expect(result.current.counter).toBe(1)
    // })
  })
})
