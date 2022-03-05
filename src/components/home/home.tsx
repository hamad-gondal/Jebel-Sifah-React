import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { handleLogout, sessionStatus } from '../../helper/authorization';
import AddEvent from '../add-event/add-event';
import List from '../list/list';
import Login from '../login/login';
import './home.scss';
import logo from '../../assets/logo.png';


function Home() {
    const [token, setToken] = React.useState(sessionStatus());

    const handleLogoutMethod = async () => {
        handleLogout();
    };

    const handleLogin = async () => {
        const token: boolean = sessionStatus();
        setToken(token);
        console.log('I am in Login, Status:', token);
    };

    useEffect(() => {
        setToken(sessionStatus());
        // console.log('Session Status:', token);
    }, []);


    return (
        <div className='home'>
            <BrowserRouter>
                {token ?
                    <nav className='header'>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="navLinks">
                            <Link className='link' to="/" onClick={() => handleLogin()}>Events</Link>
                            <Link className='link' to="/add-event" onClick={() => handleLogin()}>Add Event</Link>
                            <Link className='link' to="/login" onClick={() => handleLogoutMethod()}>Logout</Link>
                        </div>
                    </nav> : <div></div>
                }
                <Routes>
                    <Route path="/" element={token ? <List /> : <Navigate to="/login" />} />
                    <Route path="/add-event" element={token ? <AddEvent /> : <Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <footer className='footer'>
                    <p>Jebel Sifah Live | Admin</p>
                </footer>
            </BrowserRouter>
        </div>
    );
}


export default Home;


