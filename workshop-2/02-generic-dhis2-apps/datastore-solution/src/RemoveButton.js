import { useSavedObject } from '@dhis2/app-service-datastore'
import { Button } from '@dhis2/ui'
import { removeButton } from './App.module.css'

const RemoveButton = ({ id }) => {
    const [, { remove }] = useSavedObject(id)
    return <span className={removeButton}>
        <Button dense destructive onClick={() => remove(id)}>
            -
        </Button>
    </span>
}

export default RemoveButton