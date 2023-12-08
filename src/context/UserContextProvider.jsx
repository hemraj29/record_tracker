import React, { useEffect, useState } from 'react';
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(''); 
  const [loggedInUser,setLoggedInUser] = useState(null);





  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data.users))
      .catch((error) => console.error("Error Fetching User data:", error));
  }, []);


  const loginUser = (username, password) => {
    if (!user) {
      console.error("User data not available yet.");
      return;
    }

    console.log(user)
  
    const foundUser = user.find(
      (u) => u.firstName === username && u.email === password
    );
  
    if (foundUser) {
      setLoggedInUser(foundUser);
      console.log("User logged in:", foundUser);
    } else {
      console.warn("Invalid credentials. User not found.");
    }
  };
  


const logoutUser = () => {
    setLoggedInUser(null);
}




  console.log(user)

  return (
    <UserContext.Provider value={{ user ,loginUser , loggedInUser , logoutUser}}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
