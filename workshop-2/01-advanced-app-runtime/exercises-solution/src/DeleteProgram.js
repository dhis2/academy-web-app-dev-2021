import { useDataMutation } from '@dhis2/app-runtime'
import { Button } from '@dhis2/ui'

const mutation = {
    resource: 'programs',
    type: 'delete',
    id: ({ id }) => id
}

export const DeleteProgram = ({ id, refetch }) => {
    const [mutate, { loading }] = useDataMutation(mutation)

    const onClick = () => {
        mutate({ id }).then(refetch)
    }

    return (
        <>
            <Button
                small
                destructive
                disabled={loading}
                onClick={onClick}
            >
                Delete
            </Button>
        </>
    )
}