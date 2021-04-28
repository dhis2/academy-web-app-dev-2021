import { useAlert, useDataQuery } from '@dhis2/app-runtime'
import { AddProgram } from './AddProgram';
import { DeleteProgram } from './DeleteProgram';

/* @TODO-1: Convert this static query into a dynamic one. 
          We want to be able to change the pageSize dynamically later on 
          without changing the query itself 
*/
const query = {
    programs: {
        resource: 'programs',
        params: {
            order: 'displayName:asc',
            pageSize: 2, 
            page: 1
        },
    },
}

export const ProgramsList = () => {
    /* @TODO-1: Define the variables here to be able to render the first 5 programs */
    const { loading, error, data, refetch } = useDataQuery(query)

    /* @TODO-3: add an alert when a Program has been created using the useAlert hook
        [ADD HERE]
    */

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
                                {/*@TODO-2: Pass props to the DeleteProgram component*/}
                                <DeleteProgram>Delete</DeleteProgram>
                            </li>
                        ))}
                    </ul>
                    <AddProgram
                        //@TODO-3: The alerts should be triggered here 
                        onCreate={() => {
                            refetch()
                        }}
                    />
                </>
            )}
        </div>
    )
}