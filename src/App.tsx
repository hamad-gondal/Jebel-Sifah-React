import React from 'react';
import './App.scss';
import logo from './assets/logo.png';
import List from './components/list/list'
import Login from './components/login/login';
import AddEvent from './components/add-event/add-event'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <nav className='header'>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navLinks">
            <Link className='link' to="/">Events</Link>
            <Link className='link' to="/add-event">Add Event</Link>
            <Link className='link' to="/logout">Logout</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/logout" element={<Login />} />
        </Routes>
        <footer className='footer'>
          <p>Jebel Sifah Live | Admin</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
