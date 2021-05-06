import { SingleSelectOption, SingleSelectField } from '@dhis2/ui'
import React, { useState } from 'react'
import { DataElement } from './DataElement'
import { getLabelByType } from './getLabelByType'
import { useDataElement } from './useDataElement'

const MyApp = () => {
  const [selected, setSelected] = useState('top')
  const { loading, error, data } = useDataElement('FTRrcoaog83')

  return (
    <div style={{ width: 500, padding: 16 }}>
      <h2>Tier type</h2>

      <SingleSelectField
        label="Tier type"
        selected={selected}
        onChange={payload => setSelected(payload.selected)}
      >
        <SingleSelectOption value="top" label="top" />
        <SingleSelectOption value="mid" label="mid" />
        <SingleSelectOption value="low" label="low" />
        <SingleSelectOption value="custom" label="Custom tier" />
      </SingleSelectField>

      <p>
        <strong>You have selected:</strong>
        {' '}
        {getLabelByType({ type: selected })}
      </p>

      <p>
        <hr />
      </p>

      <h2>Data element</h2>

      <DataElement
        loading={loading}
        error={error}
        data={data}
      />
    </div>
  )
}

export default MyApp
