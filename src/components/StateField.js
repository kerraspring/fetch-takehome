import React, { useState, useEffect } from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";
import LoadingBar from "./LoadingBar";

export default function StateField({ states, onChange, success }) {
  const [state, setState] = useState("");

  function handleChange(e) {
    setState(e.target.value);
    onChange("state", e.target.value);
  }

  useEffect(() => {
    if (success) {
      setState("");
    }
  }, [success]);

  return (
    <>
      {states ? (
        <>
          <InputLabel htmlFor='states' id="statesLabel">Select State</InputLabel>
          <Select
            fullWidth
            id='states'
            labelId='statesLabel'
            value={state}
            onChange={handleChange}
            required
            aria-required='true'
          >
            {states.map((state, index) => (
              <MenuItem key={index} value={state.abbreviation}>
                {state.name}
              </MenuItem>
            ))}
          </Select>
        </>
      ) : (
        <LoadingBar color='secondary' />
      )}
    </>
  );
}
