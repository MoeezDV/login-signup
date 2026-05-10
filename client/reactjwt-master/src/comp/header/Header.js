import React from 'react'
import './Header.css'
import { Container , Navbar ,Nav } from 'react-bootstrap'
import { useNavigate ,Link} from 'react-router-dom'


function Header() {

const token = localStorage.getItem("token")
console.log("Token" , token)
const navigate = useNavigate()

const handleLogout=() =>{
  console.log("Logging out...");
  localStorage.removeItem("token")
  console.log("Token after logout:", localStorage.getItem("token")); // Debugging token removal
  navigate("/login")
  
};
 

return (
    
     <>
      <Navbar bg={token ? "primary" : "dark"} variant="dark">
        <Container>
          <Navbar.Brand as={Link} to=""> 
            {token ? "Logged-In ": "Not-LoggedIn"}
          </Navbar.Brand>

          <Nav className="ml-auto">
            
        
      {token ? (

<>
<Nav.Link as={Link} to="/dashboard" className="nav-link">Dashbaord</Nav.Link>
<Nav.Link as={Link} onClick={handleLogout} className="nav-link">Logout</Nav.Link>

</>


      ) :   (

<>
<Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
<Nav.Link as={Link} to="/register" className="nav-link">signup</Nav.Link>

</>




      ) }
      </Nav>
      </Container>
      </Navbar>
    </>
  




    
  );
}

export default Header