import React, { useState } from "react";
import NameField from "./NameField";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import OccupationField from "./OccupationField";
import StateField from "./StateField";
import SubmitButton from "./SubmitButton";
import SuccessAlert from "./SuccessAlert";
import ErrorAlert from "./ErrorAlert";
import { submitForm } from "../service/formService";

import { CardActions, Typography, Stack } from "@mui/material";

export default function Form({ occupations, states }) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  function handleInputChange(name, value) {
    setInputs({ ...inputs, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitForm(inputs, setSuccess, setError, setInputs);
  }

  return (
    <>
      <Stack spacing={2} className='form-stack'>
        <Typography variant='h2' component='h1'>
          Register
        </Typography>
        <form onSubmit={handleSubmit} className='form-inputs'>
          <Stack spacing={2} className='form-inputs'>
            <NameField onChange={handleInputChange} />
            <EmailField onChange={handleInputChange} />
            <PasswordField onChange={handleInputChange} />
            <OccupationField
              occupations={occupations}
              onChange={handleInputChange}
            />
            <StateField states={states} onChange={handleInputChange} />
            <CardActions className='form-btn-container'>
              <SubmitButton />
            </CardActions>
          </Stack>
        </form>

        {success ? <SuccessAlert /> : error ? <ErrorAlert /> : null}
      </Stack>
    </>
  );
}
