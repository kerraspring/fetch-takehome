import React from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

export default function ErrorAlert() {
  return (
    <Snackbar open={true}>
      <Alert severity='error'>
        Error. Please try again
      </Alert>
    </Snackbar>
  );
}
