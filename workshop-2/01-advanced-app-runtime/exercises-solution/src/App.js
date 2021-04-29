import React from 'react'
import classes from './App.module.css'
import {ProgramsList} from './ProgramsList'

const MyApp = () => (
    <div className={classes.container}>
        <ProgramsList />
    </div>
)

export default MyApp