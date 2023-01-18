import { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

export default function Form(props) {
  const { occupations, states } = props;
  // eslint-disable-next-line
  const [response, setResponse] = useState();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
  });

  function handleChange(e) {
    setInputs((previousState) => ({
      ...previousState,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    const postForm = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: inputs.name,
        email: inputs.email,
        password: inputs.password,
        occupation: inputs.occupation,
        state: inputs.state,
      }),
    };
    try {
      fetch("https://frontend-take-home.fetchrewards.com/form", postForm)
        .then((response) => response.json())
        .then((data) => {
          setResponse(data);
        });
      alert("Thanks for registering!")
    } catch (error) {
      console.error(error);
      alert("Error submitting response. Please try again");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "1000px",
      }}
    >
      <Card sx={{ maxWidth: 500, minWidth: 240 }}>
        <CardContent sx={{ backgroundColor: "#FFD86F" }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: "h2.fontSize",
              justifyContent: "center",
              display: "flex",
            }}
          >
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                name="name"
                value={inputs.name}
                type={"text"}
                sx={{ margin: 2 }}
                required
                placeholder="Full Name"
                variant="outlined"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                name="email"
                value={inputs.email}
                type={"email"}
                sx={{ margin: 2 }}
                required
                placeholder="Email"
                variant="outlined"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                name="password"
                value={inputs.password}
                type={"password"}
                sx={{ margin: 2 }}
                required
                placeholder="Password"
                variant="outlined"
                onChange={handleChange}
              />
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel
                sx={{ paddingLeft: 4, paddingTop: 1.5 }}
                id="occupations"
              >
                Select Occupation
              </InputLabel>
              <Select
                name="occupation"
                labelId="occupations-label"
                id="occupations"
                label="Occupations"
                value={inputs.occupation}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ margin: 2 }}
              >
                {occupations.map((occupation, index) => (
                  <MenuItem key={index} value={occupation}>
                    {occupation}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel sx={{ paddingLeft: 4, paddingTop: 1.5 }} id="states">
                Select State
              </InputLabel>
              <Select
                name="state"
                labelId="states-label"
                id="states"
                label="States"
                value={inputs.state}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{ margin: 2 }}
              >
                {states.map((state, index) => (
                  <MenuItem key={index} value={state.abbreviation}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <CardActions sx={{ justifyContent: "center", display: "flex" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#300D38" }}
                type="submit"
              >
                Submit
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

