import { useDataMutation } from '@dhis2/app-runtime'
import { Button, InputField } from '@dhis2/ui'
import { useState } from 'react'

const mutation = {
    resource: 'programs',
    type: 'create',
    data: ({ name }) => ({
        name: name,
        shortName: name,
        programType: "WITH_REGISTRATION"
    }),
}

export const AddProgram = ({ onCreate }) => {
    const [inputValue, setInputValue] = useState("")
    const [mutate, { loading }] = useDataMutation(mutation, {
        onComplete: onCreate,
    })
    
    return (
        <>
            <InputField
                label={'New Program'}
                placeholder={'New program name'}
                value={inputValue}
                onChange={({ value }) => setInputValue(value)}
            />
            <Button
                primary
                disabled={loading}
                onClick={() => mutate({ name: inputValue })}
            >
                Add
            </Button>
        </>
    )
}
