import { Box } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import ErrorAlert from "./components/ErrorAlert";
import Form from "./components/Form";
import LoadingScreen from "./components/LoadingScreen";
import getLists from "./service/listService";

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setLoading(true);
    getLists()
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container load-container">
    <LoadingScreen />
    </div>
  )}

  if (error) {
    return <ErrorAlert />;
  }

  return (
    <div className="container">
    <Box className='app-box full-height'>
      <Form occupations={data.occupations} states={data.states} />
    </Box>
    </div>
  );
}

export default App;
