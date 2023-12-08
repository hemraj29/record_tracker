import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import "./Navbar.css";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const { loggedInUser,logoutUser} = useContext(UserContext);
  

  const handleLogout = () => {
   
    logoutUser();
  };
 

  return (
    <div className='navbar'>
      {/* Logo (replace 'Your Logo' with your actual logo or image) */}
      <div className='logo'>
        <h2>Record Visualizer</h2>
      </div>

      {/* Display username if a user is logged in */}
      
      {loggedInUser && (
        <div className='user-info'>
          <h4>User:{loggedInUser.username}</h4>
          {/* Logout button */}
          <button className='logout' onClick={handleLogout}>Logout</button>
        </div>
      )}
      {
        !loggedInUser && (
          <div className="login">
            <button className='logout'>Login</button>
          </div>
        )
      }
    </div>
  );
};

export default Navbar;
