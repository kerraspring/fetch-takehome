import { useState } from 'react';
import { TextField, Button, FormControl, Select, InputLabel, MenuItem, Card, CardContent, CardActions, FormGroup } from '@mui/material';
import { Box } from '@mui/system';


const Form = (props) => {
    const { occupations, states } = props;
    const [response, setResponse] = useState(null);

    const [inputs, setInputs] = useState({
        name:'',
        email:'',
        password:'',
        occupation: '',
        state: ''
    });

    const handleChange = (e) => {
        setInputs((previousState) => ({
            ...previousState,
            [e.target.name] : e.target.value
        }))

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const postForm = {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({
                name:inputs.name,
                email:inputs.email,
                password:inputs.password,
                occupation: inputs.occupation,
                state: inputs.state
            })
        };
        console.log(postForm.body);
        fetch('https://frontend-take-home.fetchrewards.com/form', postForm)
            .then(response => response.json())
            .then(data => {
                setResponse(data);
                console.log(data)})
            .catch(error =>
                console.log(error))
    };

    return (
      <Box sx={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'800px'
      }}
        
      >
        <Card sx={{ maxWidth: 500, minWidth: 240}}>
          <CardContent>
            
            <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
            <TextField
            name="name"
            value={inputs.name}
            type={'text'}
            sx={{margin:2}}
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
            type={'email'}
            sx={{margin:2}}
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
            type={'password'}
            sx={{margin:2}}
            required
            placeholder="Password"
            variant="outlined"
            onChange={handleChange}
            />
            </FormControl>
            

            <FormControl variant="standard" fullWidth>
  <InputLabel sx={{paddingLeft:2}} id='occupations'>Select Occupation</InputLabel>
  <Select
    name='occupation'
    labelId='occupations-label'
    id='occupations'
    label="Occupations"
    value={inputs.occupation}
    onChange={handleChange}
    required
    sx={{ margin:2 }}
  >
    {occupations.map((occupation, index) => (
      <MenuItem key={index} value={occupation}>{occupation}</MenuItem>
    ))}
  </Select>
</FormControl>

<FormControl variant="standard" fullWidth>
  <InputLabel sx={{paddingLeft:2}} id='states'>Select State</InputLabel>
  <Select
    name='state'
    labelId='states-label'
    id='states'
    label="States"
    value={inputs.state}
    onChange={handleChange}
    required
    sx={{ margin:2 }}
  >
    {states.map((state, index) => (
      <MenuItem key={index} value={state.abbreviation}>{state.name}</MenuItem>
    ))}
  </Select>
</FormControl>
<CardActions>
            <Button variant='contained' type='submit'>Submit</Button>
            </CardActions>
            
            </form>
            
            </CardContent>
        </Card>
      </Box>
    )
}

export default Form;