import { useDataQuery } from '@dhis2/app-runtime'

const DATA_ELEMENT_QUERY = {
  dataElement: {
    resource: 'dataElements',
    id: ({ id }) => id,
    params: {
      fields: ['id', 'displayName'],
    },
  },
}

export const useDataElement = id => {
  const variables = { id }
  return useDataQuery(DATA_ELEMENT_QUERY, { variables })
}
