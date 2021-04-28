import { useDataMutation } from '@dhis2/app-runtime'
import { Button } from '@dhis2/ui'

const mutation = {
    /* @TODO-3: Define a delete mutation (it has to be a dynamic query)*/
}


export const DeleteProgram = ({  }) => {
    const [mutate, { loading }] = useDataMutation(mutation)


    return (
        <>
            <Button
                small
                destructive
                disabled={loading}
                /* @TODO-3: Add the onClick event here */ 
                
            >
                Delete
            </Button>
        </>
    )
}