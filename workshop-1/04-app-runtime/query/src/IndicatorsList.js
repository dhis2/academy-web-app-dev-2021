import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui'
import * as classes from './App.module.css'

const query = {
    results: {
        // @TODO: Writa a query to show 5 indicators with their name and description
    },
}

export const IndicatorsList = () => {
    // @TODO: Replace this line with a hook to perform the above query!
    const { loading, error, data } = { loading: false, error: 'Unimplemented', data: undefined }

    if (error) {
        return <span>ERROR: {error.message}</span>
    }

    if (loading) {
        return <CircularLoader />
    }

    return <ul className={classes.list}>
        {data.results.indicators.map(indicator =>
            <li>
                <strong>{indicator.name}</strong><br/>
                <span>{indicator.description}</span>
            </li>
        )}
    </ul>
}