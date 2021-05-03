import { useAlert, useDataQuery } from '@dhis2/app-runtime'
import { AddProgram } from './AddProgram';
import { DeleteProgram } from './DeleteProgram';

/* @TODO-1: Convert this static query into a dynamic one. 
          We want to be able to change the "pageSize" dynamically later on 
          without changing the query itself 

          useDataquery documentation: https://runtime.dhis2.nu/#/hooks/useDataQuery 
          Check the slides for code examples: https://drive.google.com/file/d/1LgLE2uEWeKGp8ik3aeV1gMbLvqqQSxxu/view?usp=sharing 
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
    /* @TODO-1: Define the variables key of the `options` object 
                to be able to render the first 5 programs */
    const { loading, error, data, refetch } = useDataQuery(query)


    /* @TODO-2: Add an alert when a Program has been created using the useAlert hook
                See documentation for examples: https://runtime.dhis2.nu/#/hooks/useAlert     
    
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
                                {/*@TODO-3: Pass props to the DeleteProgram component
                                            HINT: You will need to pass 2 props: 1) id and 2) refetch function 
                                */}
                                <DeleteProgram>Delete</DeleteProgram>
                            </li>
                        ))}
                    </ul>
                    <AddProgram
                        //@TODO-2: The alerts should be triggered here 
                        onCreate={() => {
                            refetch()
                        }}
                    />
                </>
            )}
        </div>
    )
}