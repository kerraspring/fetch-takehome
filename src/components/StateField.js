import React, { useState } from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";
import LoadingBar from "./LoadingBar";

export default function StateField({ states, onChange }) {
  const [state, setState] = useState('');

  function handleChange(e) {
    setState(e.target.value);
    onChange("state", e.target.value);
  }

  return (
    <>
    {states ? (
      <>
      <InputLabel id='states'>Select State</InputLabel>
      <Select
        fullWidth
        labelId='states-label'
        id='states'
        label='States'
        value={state}
        onChange={handleChange}
        required
      >
        {states.map((state, index) => (
          <MenuItem key={index} value={state.abbreviation}>
            {state.name}
          </MenuItem>
        ))}
      </Select>
    </>
  ) : <LoadingBar color='secondary'/>}
  </>
  )
}
