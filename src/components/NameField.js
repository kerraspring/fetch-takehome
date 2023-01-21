import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function NameField({ onChange }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
    onChange("name", e.target.value);
  }

  return (
    <TextField
      value={name}
      type='text'
      required
      label='Full Name'
      name='Full Name'
      variant='outlined'
      onChange={handleChange}
    />
  );
}
