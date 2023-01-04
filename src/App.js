import { Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState({});
  const { occupations, states } = data;

  useEffect(() => {
    const getLists = () => {
      fetch(
        "https://gtfo-cors--timmy_i_chen.repl.co/get?url=https://frontend-take-home.fetchrewards.com/form"
      )
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    };
    getLists();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#300D38" }}>
      {occupations && states && (
        <Form occupations={occupations} states={states} />
      )}
    </Box>
  );
}

export default App;
