import React from 'react'
import classes from './App.module.css'
import { DataStoreProvider } from '@dhis2/app-service-datastore'
import VisualizationList from './VisualizationList'

const MyApp = () => (
    <div className={classes.container}>
        <DataStoreProvider namespace="my-custom-app-namespace-1234">
            <VisualizationList />
        </DataStoreProvider>
    </div>
)

export default MyApp
