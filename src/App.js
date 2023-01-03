import React from 'react';
import { useState, useEffect } from 'react'
import Form from './components/Form';

function App() {

    const [data, setData] = useState({});
    const {occupations, states} = data;
    
  useEffect(() => {
    const getLists = () => {
      fetch('https://gtfo-cors--timmy_i_chen.repl.co/get?url=https://frontend-take-home.fetchrewards.com/form')
      .then(res => res.json())
      .then((data) => {
        setData(data)
      })
    };
    getLists();
  }, [])
  
  
  

  return (
    <div>
      {occupations && states && <Form occupations={occupations} states={states} />}
    </div>
  );
}

export default App;
