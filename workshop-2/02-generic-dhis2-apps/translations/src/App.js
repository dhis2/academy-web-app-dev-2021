import React from 'react'
import { useDataQuery } from '@dhis2/app-runtime'
/* @TODO-1: Import i18n */
import classes from './App.module.css'

const query = {
    me: {
        resource: 'me',
    },
}

const MyApp = () => {
    const { loading, error, data } = useDataQuery(query)

    if (error) return <span>ERROR</span>
    if (loading) return <span>...</span>

    return (
        <div className={classes.container}>
            {/* @TODO-2: add a simple translation  
                1. Make the "Welcome" string translatable into French: "Bienvenue"
                2. Hint: make sure that you create a 'fr.po' file in the i18n folder 
            */}
            <h1>Welcome!</h1>

            {/* @TODO-3: use interpolation for dynamic values  
                1. Instead of "Hello User", replace this with "Hello <name>" (name will be the variable that contains the name of the user)  
                2. Hint: Remember to pass a second object with the name that we get as a result of the query 
                3. Make sure to translate "Bonjour <name>" to French as well
            */}
            <h3>Hello User</h3>
        </div>
    )
        
}

export default MyApp
