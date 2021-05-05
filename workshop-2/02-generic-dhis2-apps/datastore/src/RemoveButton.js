/* @TODO-4: import useSavedObject from @dhis2/app-service-datastore */
import { Button } from '@dhis2/ui'
import { removeButton } from './App.module.css'

const RemoveButton = ({ id }) => {
    /* @TODO-4: get the remove function for object with id <id>, use the useSavedObject hook */
    const remove = () => {}

    return <span className={removeButton}>
        <Button dense destructive onClick={() => remove(id)}>
            -
        </Button>
    </span>
}

export default RemoveButton