import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

export default function NameField({ onChange, success }) {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
    onChange("name", e.target.value);
  }

  useEffect(() => {
    if (success) {
      setName("");
    }
  }, [success]);

  return (
    <TextField
      value={name}
      type='text'
      required
      label='Full Name'
      name='Full Name'
      variant='outlined'
      onChange={handleChange}
      aria-required='true'
    />
  );
}
