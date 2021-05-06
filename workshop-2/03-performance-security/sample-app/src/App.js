import { DataStoreProvider } from '@dhis2/app-service-datastore'
import i18n from './locales/index.js'
import Router from './Router.js'
import { Link } from 'react-router-dom'

const App = () => {
    return <DataStoreProvider namespace="visualization-app">
        <Router />
    </DataStoreProvider>
}

export default App