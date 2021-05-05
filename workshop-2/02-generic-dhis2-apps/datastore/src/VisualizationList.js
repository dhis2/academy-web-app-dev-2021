import React from "react";
/* @TODO-2: import useSavedObjectList from @dhis2/app-service-datastore */
import RemoveButton from "./RemoveButton.js";

import { list } from './App.module.css'
import AddControl from "./AddControl.js";

const VisualizationList = () => {
  /* @TODO-2: retrieve the user's list of saved objects, using the useSavedObjectList hook */
  const objects = []

  return (
    <>
      <ul className={list}>
        {objects.map((obj) => (
          <li key={obj.id}>
            {obj.name}
            <RemoveButton id={obj.id} />
          </li>
        ))}
      </ul>
      <AddControl /* @TODO-3: pass the `add` function as a prop to the AddControl component */ />
    </>
  );
};

export default VisualizationList;
