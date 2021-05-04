/* eslint-disable react/prop-types */
import { useAlert, useDataMutation } from '@dhis2/app-runtime'
import { Button } from '@dhis2/ui'
import React from 'react'

// Styles for list items
const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '0.75rem',
}

// Mutation to change a visualization name
const mutation = {
    resource: 'visualizations',
    type: 'update',
    // 4. Set up a dynamic mutation
    id: ({ id }) => id,
    data: ({ name, type }) => ({
        name: name,
        type: type,
    }),
}

export default function VisualizationsListItem({ visualization, refetch }) {
    // 8. Set up a dynamic alert to communicate success or failure of mutation
    const { show } = useAlert(
        ({ message }) => message,
        ({ status }) => {
            if (status === 'success') return { success: true }
            else if (status === 'error') return { critical: true }
            else return {}
        }
    )

    // 5. Set up the mutation that will edit the visualization name
    const [mutate, { loading }] = useDataMutation(mutation, {
        // 7. Success and failure callbacks
        onComplete: response => {
            const message = 'Success!\n' + JSON.stringify(response, null, 4)
            show({ message, status: 'success' })
        },
        onError: error => {
            const message = 'Oops! Something went wrong: ' + error.message
            show({ message, status: 'error' })
        },
    })

    async function addEmoji() {
        // Add some emojis to the visualization name
        const newName = `${visualization.name} 🎉🥳⭐️`

        // 6. Execute the mutation, using variables for the dynamic mutation
        const response = await mutate({
            id: visualization.id,
            type: visualization.type,
            name: newName,
        })
        console.log(response)

        // Refetch the VisualizationsList query (no change in variables)
        refetch()
    }

    // Render the list item and the button that triggers a mutation
    return (
        <li style={styles}>
            {visualization.name}{' '}
            <Button small disabled={loading} onClick={addEmoji}>
                Add emoji ✨
            </Button>
        </li>
    )
}
