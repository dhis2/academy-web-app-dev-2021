import { useDataMutation } from '@dhis2/app-runtime'
import { Button } from '@dhis2/ui'

const mutation = {
    /* @TODO-3: Define a delete mutation (it has to be a dynamic query)
                See documentation here for examples: https://runtime.dhis2.nu/#/hooks/useDataMutation     
    */
                
}

/* @TODO-3: Add the id and refetch props that were passed from the ProgramsList component */ 
export const DeleteProgram = ({  }) => {
    const [mutate, { loading }] = useDataMutation(mutation)

    const onClick = () => {
        /* @TODO-3: Complete this onClick function to be able to delete the id 
                    The .then here is a method in JavaScript which means that 
                    once the item is succesfully deleted then it will refetch the data 
        */ 
        mutate({}).then(refetch) 
    }
    

    return (
        <>
            <Button
                small
                destructive
                disabled={loading}
                /* @TODO-3: Pass the onClick function here*/
                onClick = {} 
                
            >
                Delete
            </Button>
        </>
    )
}