import React, { useState } from 'react';
import { TextField } from '@mui/material';

export default function EmailField({ onChange }) {

  const [email, setEmail] = useState('')

  function handleChange(e) {
    setEmail(e.target.value)
    onChange('email', e.target.value);
  }

  return (
    <TextField
                value={email}
                type="email"
                required
                label="Email"
                variant="outlined"
                onChange={handleChange}
              />
  )
}
