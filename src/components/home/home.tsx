import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { handleLogout, sessionStatus } from '../../helper/authorization';
import AddEvent from '../add-event/add-event';
import List from '../list/list';
import Login from '../login/login';
import './home.scss';
import logo from '../../assets/logo.png';


function Home() {
    const [token, setToken] = React.useState(sessionStatus());
    const [activeClass, setActiveClass] = React.useState('');
    const location = useLocation();

    const logout = async () => {
        await handleLogout();
    };

    const handleLogin = async () => {
        setToken(sessionStatus());
        setActiveClass(location.pathname)
    };

    useEffect(() => {
        handleLogin();

    }, [location.pathname]);

    return (
        <div className='home'>
            <nav className='header'>
                <div className="logo">
                    <Link className='link' to="/"> <img src={logo} alt="logo" /></Link>
                </div>
                <div className="navLinks">
                    <Link className={activeClass === '/' ? 'link active' : 'link'} to="/" onClick={() => handleLogin()}>Events</Link>
                    <Link className={activeClass === '/add-event' ? 'link active' : 'link'} to="/add-event" onClick={() => handleLogin()}>Add Event</Link>
                    <Link className={activeClass === '/login' ? 'link active' : 'link'} to="/login" onClick={() => logout()}>Logout</Link>
                    {/* <Link className={location.pathname === '/' ? 'link active' : 'link'} to="/" onClick={() => handleLogin()}>Events</Link>
                    <Link className={location.pathname === '/add-event' ? 'link' : 'link active'} to="/add-event" onClick={() => handleLogin()}>Add Event</Link>
                    <Link className={location.pathname === '/login' ? 'link active' : 'link'} to="/login" onClick={() => logout()}>Logout</Link> */}
                </div>
            </nav>
            <Routes>
                <Route path="/" element={sessionStatus() ? <List /> : <Navigate to="/login" />} />
                <Route path="/add-event" element={sessionStatus() ? <AddEvent /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
            </Routes>
            <footer className='footer'>
                <p>Jebel Sifah Live | Admin</p>
            </footer>
        </div>
    );
}


export default Home;


