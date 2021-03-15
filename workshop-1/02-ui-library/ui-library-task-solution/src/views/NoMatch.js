import React from 'react'
import { Redirect } from 'react-router-dom'

/**
 * When this component is rendered,
 * then the app redirects to the home page
 */
export const NoMatch = () => <Redirect to="/" />
