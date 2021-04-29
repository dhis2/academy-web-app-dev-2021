import { useAlert, useDataQuery } from '@dhis2/app-runtime'
import { AddProgram } from './AddProgram';
import { DeleteProgram } from './DeleteProgram';

const query = {
    programs: {
        resource: 'programs',
        params: ({ pageSize }) => ({
            order: 'displayName:asc',
            pageSize,
            page: 1
        }),
    },
}

export const ProgramsList = () => {
    const { loading, error, data, refetch } = useDataQuery(query, {
        variables: {
            pageSize: 5
        }
    })
    const { show } = useAlert('Program created!')

    return (
        <div>
            <h1>Programs</h1>
            {loading && <span>...</span>}
            {error && <span>{`ERROR: ${error.message}`}</span>}
            {data && (
                <>
                    <ul>
                        {data.programs.programs.map(prog => (
                            <li key={prog.id} style={{padding: '10px'}}>
                                {prog.displayName} {" "}
                                <DeleteProgram id={prog.id} refetch={refetch}>Delete</DeleteProgram>
                            </li>
                        ))}
                    </ul>
                    <AddProgram
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