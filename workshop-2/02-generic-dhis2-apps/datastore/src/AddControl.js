import React, { useState } from "react";
import { Button, Input } from "@dhis2/ui";
import { useAlert } from "@dhis2/app-runtime";
import i18n from "./locales/index.js";

import { addControl } from "./App.module.css";

const AddControl = () => {
  const [newVisName, setNewVisName] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    show: showEmptyVisError,
  } = useAlert("You must enter a name for the new visualization", {
    duration: 5000,
  });

  return (
    <div className={addControl}>
      <Input
        disabled={loading}
        value={newVisName}
        placeholder={i18n.t("New name")}
        onChange={({ value }) => setNewVisName(value)}
      ></Input>
      <Button
        disabled={loading}
        primary
        onClick={() => {
          if (!newVisName.length) {
            showEmptyVisError();
            return;
          }
          setLoading(true);
          /* @TODO-3: Add a new saved object with the name entered in the input */
          setLoading(false);
        }}
      >
        {i18n.t("Add Visualization")}
      </Button>
    </div>
  );
};

export default AddControl;
