import React from 'react'

export const DataElement = ({ loading, error, data }) => {
  if (loading) return 'Loading data element'
  if (error) return `Error loading data element: ${error}`

  return (
    <>
      <p>
        <strong>Data element id:</strong>
        {' '}
        {data.dataElement.id}
      </p>

      <p>
        <strong>Data element name:</strong>
        {' '}
        {data.dataElement.displayName}
      </p>
    </>
  )
}
