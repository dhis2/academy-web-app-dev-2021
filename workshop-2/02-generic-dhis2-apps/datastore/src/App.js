import React from 'react'
import classes from './App.module.css'
import VisualizationList from './VisualizationList'

/* @TODO-1 - import the DataStoreProvider from @dhis2/app-service-datastore */
/* @TODO-1 - wrap the VisualizationList in a DataStoreProvider for namespace "my-custom-app-namespace-1234" */
const MyApp = () => (
    <div className={classes.container}>
        <VisualizationList />
    </div>
)

export default MyApp
