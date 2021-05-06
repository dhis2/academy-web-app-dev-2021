import React, { useState } from 'react'
import { useSetting } from '@dhis2/app-service-datastore'
import { useAlert } from '@dhis2/app-runtime'
import { Input, Button } from '@dhis2/ui'
import i18n from '../locales/index.js'

import * as classes from '../App.module.css'

const Configure = () => {
    const [savedUsername, { set: setSavedUsername }] = useSetting('username')
    const [savedPassword, { set: setSavedPassword }] = useSetting('password')

    const { show: showSuccessAlert } = useAlert(i18n.t('Credentials saved'), { success: true })

    const [username, setUsername] = useState(savedUsername)
    const [password, setPassword] = useState(savedPassword)
    const onSubmit = async (e) => {
        e.preventDefault()
        await setSavedUsername(username)
        await setSavedPassword(password)
        showSuccessAlert()
    }
    return <div className={classes.page}>
        <form onSubmit={onSubmit}>
            <Input value={username} onChange={({ value }) => setUsername(value)} placeholder={'Username'} />
            <Input value={password} onChange={({ value }) => setPassword(value)} placeholder={'Password'} />
            <Button type="submit">Save</Button>
        </form>
    </div>
}

export default Configure