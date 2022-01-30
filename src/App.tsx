import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/register'

function App() {
  const [name, setName] = useState('');
  useEffect( ()=>{
      (
        async () => {
          const response = await fetch('http://localhost:8000/api/user', {
            headers: {'Content-Type':'application/json'},
            credentials: "include",
          });
          const content = await response.json();
          setName(content.name);
        }
      )();
    });
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation name={name} setName={setName}/>

        <main className="form-signin">
        
            <Routes>
              <Route path="/" element={<Home name={name}/>}/>
              <Route path="/login" element={<Login setName={setName}/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
          
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
