import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

export default function PasswordField({ onChange, success }) {
  const [password, setPassword] = useState("");

  function handleChange(e) {
    setPassword(e.target.value);
    onChange("password", e.target.value);
  }

  useEffect(() => {
    if (success) {
      setPassword("");
    }
  }, [success]);

  return (
    <TextField
      value={password}
      type='password'
      required
      label='Password'
      variant='outlined'
      onChange={handleChange}
      aria-required='true'
      data-cy='password-input'
    />
  );
}
