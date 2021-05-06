import { configure, mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import React from 'react'

configure({ adapter: new Adapter() })

const DataElement = ({ loading, error, data }) => {
  if (loading) {
    return (
      <div>
        <span className="loading">Loading data element</span>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <span className="error">
          Error loading data element: {error.message}
        </span>
      </div>
    )
  }

  return (
    <div>
      <p>
        <strong>Data element id:</strong>
        {' '}
        <span className="id">
          {data.dataElement.id}
        </span>
      </p>

      <p>
        <strong>Data element name:</strong>
        {' '}
        <span className="displayName">
          {data.dataElement.displayName}
        </span>
      </p>
    </div>
  )
}

describe('DataElement', () => {
  it('should render the loading text', () => {})

  it('should render the error message', () => {})

  it("should render the data element's data", () => {})
})
