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
          <InputLabel htmlFor='occupations' id='occupations'>Select Occupation</InputLabel>
          <Select
            fullWidth
            labelId='occupations'
            id='occupations'
            value={occupation}
            onChange={handleChange}
            required
            aria-required='true'
            data-cy='occupation-input'
          >
            {occupations.map((occupation, index) => (
              <MenuItem id='occupations' key={index} value={occupation}>
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
