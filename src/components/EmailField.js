import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";

export default function EmailField({ onChange, success }) {
  const [email, setEmail] = useState("");

  function handleChange(e) {
    setEmail(e.target.value);
    onChange("email", e.target.value);
  }

  useEffect(() => {
    if (success) {
      setEmail("");
    }
  }, [success]);

  return (
    <TextField
      value={email}
      type='email'
      required
      label='Email'
      variant='outlined'
      onChange={handleChange}
      aria-required='true'
      data-cy='email-input'
    />
  );
}
