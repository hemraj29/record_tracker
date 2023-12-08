import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import UserContextProvider from './context/UserContextProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {


  return (
    <UserContextProvider>
 <Navbar/>
    <Router>
    
  <Routes>

    <Route path="/main" element={<Main/>} />
    <Route path="/" element={<Login/>} />
  </Routes>

  </Router>
    </UserContextProvider>
      

  
  );
}

export default App;
