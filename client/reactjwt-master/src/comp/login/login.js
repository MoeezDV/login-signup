
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {Button ,Form }from 'react-bootstrap';
import login from './login.css'

function Login() {
  const navigate1 = useNavigate();  
  const [formData, setFormData] = useState({
       email:'',
      password:''
        
     });


const handleSubmit = async (e) => {
  e.preventDefault();
     console.log(formData);
  try {
    const response = await fetch('http://localhost:5000/auth/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  console.log(result);
  if(result.user._id){
    navigate1('/dashboard');
     localStorage.setItem("token" , result.token)
  } else{
    console.log("invaild cerdinatial")
  }
  
 

 } catch (error) {
     console.log(error.message);
  }

  finally{
    setFormData({
    
      email:'',
      password:''
    })
  }


}   



     const handleChange = (e) => { 
   const {name, value} = e.target;
    setFormData({...formData, [name]: value});


}


  
  return (
    <>
      <Form>



<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter your email" name='email' value={formData.email} onChange={handleChange}/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Enter your password" name='password' value={formData.password} onChange={handleChange}/>
</Form.Group>

<Button type="submit" className="btn btn-primary" onClick={handleSubmit}>log in</Button>

</Form>
    
    </>
  )
}

export default Login