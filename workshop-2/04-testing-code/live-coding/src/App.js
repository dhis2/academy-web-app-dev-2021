import { SingleSelectOption, SingleSelectField } from '@dhis2/ui'
import React, { useState } from 'react'
import { getLabelByType } from './getLabelByType'

const MyApp = () => {
  const [selected, setSelected] = useState('top')

  return (
    <div style={{ width: 300, padding: 16 }}>
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
    </div>
  )
}

export default MyApp
