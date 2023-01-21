import React, { useState } from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";
import LoadingBar from "./LoadingBar";

export default function OccupationField({ occupations, onChange }) {
  const [occupation, setOccupation] = useState('');

  function handleChange(e) {
    setOccupation(e.target.value);
    onChange("occupation", e.target.value);
  }

  return (
    <>
      {occupations ? (
        <>
          <InputLabel id='occupations'>Select Occupation</InputLabel>
          <Select
            fullWidth
            labelId='occupations-label'
            id='occupations'
            label='Occupations'
            value={occupation}
            onChange={handleChange}
            required
          >
            {occupations.map((occupation, index) => (
              <MenuItem key={index} value={occupation}>
                {occupation}
              </MenuItem>
            ))}
          </Select>
        </>
      ) : <LoadingBar color='secondary'/>}
    </>
  );
}




