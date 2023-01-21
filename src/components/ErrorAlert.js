import React, { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

export default function ErrorAlert() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => setOpen(false), 5000);
  }, []);
  
  return (
    <Snackbar open={open}>
      <Alert severity='error'>Error. Please try again</Alert>
    </Snackbar>
  );
}
