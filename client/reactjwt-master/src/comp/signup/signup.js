

import {Button ,Form }from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../login/login';
function Signup() {
   const navigate1 = useNavigate();

    const [formData, setFormData] = useState({
       name:'',
       email:'',
      password:''
        
     });


const handleSubmit = async (e) => {
  e.preventDefault();
     console.log(formData);
  try {
    const response = await fetch('http://localhost:5000/user/register', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  console.log(result);
  if(result.user._id){
    navigate1('/login');
  }
  
 

 } catch (error) {
     console.log(error.message);
  }

  finally{
    setFormData({
      name:'',
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
    
    <div className='center-form>'>
<h1>Sign up</h1>
    <Form>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your Name" name='name' value={formData.name} onChange={handleChange} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter your  email" name='email' value={formData.email} onChange={handleChange}/>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter your password" name='password' value={formData.password} onChange={handleChange}/>
    </Form.Group>

<Button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign up</Button>

    </Form>
    </div>
    
    
    
    </>
     

    
  );
}

export default Signup;