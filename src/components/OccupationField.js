import React, { useState, useEffect } from "react";
import { InputLabel, Select, MenuItem } from "@mui/material";
import LoadingBar from "./LoadingBar";

export default function OccupationField({ occupations, onChange, success }) {
  const [occupation, setOccupation] = useState("");

  function handleChange(e) {
    setOccupation(e.target.value);
    onChange("occupation", e.target.value);
  }

  useEffect(() => {
    if (success) {
      setOccupation("");
    }
  }, [success]);

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
      ) : (
        <LoadingBar color='secondary' />
      )}
    </>
  );
}
