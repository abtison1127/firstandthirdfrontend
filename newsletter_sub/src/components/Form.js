import React, { useReducer, useState,} from 'react';
import {Typography, Grid, Checkbox, Input, Button, Paper, FormControl, FormGroup, FormControlLabel, Box} from "@material-ui/core"
import './Form.css'

const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

function Form() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const [errorHasShown, setErrorHasShown] = useState(false);
  const [state, setState] = useState({
    newsletter1: false,
    newsletter2: false,
    newsletter3: false,
    newsletter4: false,
    newsletter5: false,
    optOut: false,
  });

  const handleSubmit = event => {
    if (!errorHasShown) {
      setErrorHasShown(true);
      setSubmitting(false)
      setTimeout(() => {
        setSubmitting(false);
      }, 2000);
      alert("An error has occured");
    }
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 1000);
    if (optOut === true){
      alert("You have been unsubscribed")
    }
    else { alert("You have been subscribed!")}

    const data = new FormData(event.target)
    const value = Object.fromEntries(data.entries());
    console.log({value})
  }

  const form = document.querySelector('form');

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  const { newsletter1, newsletter2, newsletter3, newsletter4, newsletter5, optOut } = state;
  

    return (
        <div className="wrapper">
    <form onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="center" marginTop='10%' marginBottom='10%'>
      <Paper elevation={6} style={{maxWidth: '716px', alignItems:'center'}}>
      <div>
        <h1>Newsletters</h1>
        <h3>Select all the newsletters you'd like to recieve</h3>
      </div>
      <FormControl style={{padding: '10%', paddingTop: 0}}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox 
                      checked={newsletter1}
                      onChange={handleChange} 
                      disabled={optOut == true} 
                      value={'true'}                      
                      name="newsletter1" />}
            label={
                  <div>
                    <h4>Reverse The Online Gambling Ban</h4>
                    <p>The MPA comes with three different sizes of foam and silicone tips and carrying pouch.</p>
                  </div>}
            labelPlacement="start"
          />
          <FormControlLabel
            control={<Checkbox 
                      checked={newsletter2}
                      onChange={handleChange} 
                      disabled={optOut == true} 
                      value={'true'}
                      name="newsletter2" />}
            label={
                  <div>
                    <h4>Successfule Myspace Profile</h4>
                    <p>All users on Myspace will know that there are millions of people out there.</p>
                  </div>}
            labelPlacement="start"
          />
          <FormControlLabel
            control={<Checkbox 
                      checked={newsletter3}
                      onChange={handleChange} 
                      disabled={optOut == true} 
                      value='true'
                      name="newsletter3" />}
            label={
                  <div className="article">
                    <h4>Home Audio Recording For Everyone</h4>
                    <p>The number of friends adn acquaintances will grow in a large number. This is what you should be looking for.</p>
                  </div>}
            labelPlacement="start"
          />
          <FormControlLabel
            control={<Checkbox 
                      checked={newsletter4}
                      onChange={handleChange} 
                      disabled={optOut == true} 
                      value='true'
                      name="newsletter4" />}
            label={
                  <div>
                    <h4>Buying Used Electronic Test</h4>
                    <p>People after all will make friends after reading about you. If you have an ugly profile, there is no way...</p>
                  </div>}
            labelPlacement="start"
          />
          <FormControlLabel
            control={<Checkbox 
                      checked={newsletter5}
                      onChange={handleChange} 
                      disabled={optOut == true} 
                      value='true'
                      name="newsletter5" />}
            label={
                  <div>
                    <h4>Hey Look Here</h4>
                    <p>If you're reading this you must be a very handsome guy. I didnt have any placeholder text so I'm gonna put this instead.</p>
                  </div>}
            labelPlacement="start"
          />
        </FormGroup>
        </FormControl>
            <Paper elevation={8} style={{paddingTop: '5%'}}>
            <Grid container xs={12} direction= "row">
                <Grid item xs={12} md={12} style={{textAlign: "center"}}>
                  <Input type='email' name='email' color="primary" placeholder='Email' onChange={handleChange}/>
                  <Button
                    variant='contained'
                    color='secondary' 
                    type="submit"          
                    disabled={submitting}>
                      Subscribe
                  </Button>
                </Grid>
            </Grid>           
            <FormControl container style={{padding: '10%', paddingTop: 0}}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox 
                  checked={optOut} 
                  onChange={handleChange} 
                  name="optOut"
                  value='true' />}
                label="I do not want to recieve information about future newsletters."
                labelPlacement="start"
              />
            </FormGroup>
            </FormControl>
            </Paper>
      </Paper>
      </Box>
    </form>
  </div>
    )
}

export default Form
