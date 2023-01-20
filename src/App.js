import { Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import getOccupationList from "./services/occupationService"

function App() {
  const [data, setData] = useState({});
  const { occupations, states } = data;

  useEffect(() => {
    getOccupationList()
      .then((data) => setData(data));
  }, []);

  return (
    <Box className='app-box'>
      {occupations && states && (
        <Form occupations={occupations} states={states} />
      )}
    </Box>
  );
}

export default App;
