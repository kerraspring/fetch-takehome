import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/material";

export default function SubmitButton() {
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(true);
  }

  return (
    <Button
      variant='contained'
      sx={{
        backgroundColor: "#300D38",
        ":hover": { bgcolor: "white", color: "#300D38" },
      }}
      type='submit'
      onSubmit={handleClick}
      data-cy='submit-btn'
    >
      {loading ? <CircularProgress size={24} color='secondary' data-cy='loading-btn'/> : "Submit"}
    </Button>
  );
}
