import { useAlert, useDataQuery } from '@dhis2/app-runtime'
import { AddIndicator } from './AddIndicator';

const query = {
    indicators: {
        resource: 'indicators',
        params: ({ pageSize }) => ({
            order: 'displayName:asc',
            pageSize,
            page: 1
        }),
    },
}

export const IndicatorsList = () => {
    const { loading, error, data, refetch } = useDataQuery(query, {
        variables: {
            pageSize: 5
        }
    })
    const { show } = useAlert('Indicator created!')

    return (
        <div>
            <h1>Indicators List</h1>
            {loading && <span>...</span>}
            {error && <span>{`ERROR: ${error.message}`}</span>}
            {data && (
                <>
                    <ul>
                        {data.indicators.indicators.map(ind => (
                            <li key={ind.id}>
                                {ind.displayName}
                            </li>
                        ))}
                    </ul>
                    <AddIndicator
                        onCreate={() => {
                            show()
                            refetch()
                        }}
                    />
                </>
            )}
        </div>
    )
}
