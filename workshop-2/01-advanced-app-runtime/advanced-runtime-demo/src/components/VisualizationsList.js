/* eslint-disable react/prop-types */
import { useDataQuery } from '@dhis2/app-service-data'
import { Button, CircularLoader } from '@dhis2/ui'
import React from 'react'
import VisualizationsListItem from './VisualizationsListItem'

const query = {
    visualizations: {
        resource: 'visualizations',
        // 1. Set up a dynamic query
        params: ({ pageSize }) => ({
            pageSize: pageSize,
            fields: ['id', 'name', 'type'],
        }),
    },
}

export default function VisualizationsList({ listSize }) {
    const { data, loading, error, refetch, called } = useDataQuery(query, {
        // 2. Use variables here to take advantage of dynamic query
        variables: { pageSize: listSize },
        // 3. Try out a lazy query
        lazy: true,
    })

    return (
        <>
            {/* Loading state: */}
            {loading && <CircularLoader />}

            {/* Error state: */}
            {error && <p>{'Oops! Something went wrong.'}</p>}

            {/* Not-yet-called state: */}
            {!called && (
                <p>{'No data yet - click "Refetch" to query the list'}</p>
            )}

            {/* Data successfuly loaded: */}
            {data && (
                <ul>
                    {data.visualizations.visualizations.map(viz => (
                        <VisualizationsListItem
                            key={viz.id}
                            visualization={viz}
                            refetch={refetch}
                        />
                    ))}
                </ul>
            )}

            <Button onClick={refetch}>{'Refetch'}</Button>
        </>
    )
}
