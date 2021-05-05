import React, { useState } from "react";
import { useSavedObjectList } from "@dhis2/app-service-datastore";
import RemoveButton from "./RemoveButton.js";

import { list } from './App.module.css'
import AddControl from "./AddControl.js";

const VisualizationList = () => {
  const [objects, { add }] = useSavedObjectList();

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
      <AddControl add={add} />
    </>
  );
};

export default VisualizationList;
