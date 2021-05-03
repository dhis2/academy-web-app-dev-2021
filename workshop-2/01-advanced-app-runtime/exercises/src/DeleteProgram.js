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

        /* @TODO-3: Complete and uncomment the onClick function below to be able to delete the id 
                    The .then here is a method in JavaScript which means that 
                    once the item is succesfully deleted then it will refetch the data */ 

    // const onClick = () => {
    //     mutate({}).then(refetch) 
    // }
    

    return (
        <>
            <Button
                small
                destructive
                disabled={loading}
                /* @TODO-3: Add the onClick function here*/
            >
                Delete
            </Button>
        </>
    )
}