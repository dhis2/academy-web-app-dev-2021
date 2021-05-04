import React from 'react'
import classes from './App.module.css'
import VisualizationsList from './components/VisualizationsList'

const MyApp = () => (
    <div className={classes.container}>
        <h1>Visualizations</h1>
        <VisualizationsList listSize={10} />
    </div>
)

export default MyApp
