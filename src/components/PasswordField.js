import React, { useState } from "react";
import { TextField } from "@mui/material";

export default function PasswordField({ onChange }) {
  const [password, setPassword] = useState("");

  function handleChange(e) {
    setPassword(e.target.value);
    onChange("password", e.target.value);
  }

  return (
    <TextField
      value={password}
      type='password'
      required
      label='Password'
      variant='outlined'
      onChange={handleChange}
    />
  );
}
