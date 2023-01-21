import React from "react";
import { Snackbar } from "@mui/material";
import { Alert } from "@mui/material";

export default function SuccessAlert() {
  return (
    <Snackbar open={true}>
      <Alert severity='success'>Thanks for registering!</Alert>
    </Snackbar>
  );
}
