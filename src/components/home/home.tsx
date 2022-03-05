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
    const [token, setToken] = React.useState('false');
    const handleLogoutMethod = async () => {
        handleLogout();
    };

    const handleLogin = async () => {
        const token: string = sessionStatus();
        if (token === 'true') {
            setToken('true');
            console.log('inside login', token);
        }
    };


    useEffect(() => {
        // handleLogin();
        // console.log('try login:', token);
    }, []);

    return (
        <div className='home'>
            <BrowserRouter>
                <nav className='header'>
                    <div className="logo">
                        <img src={logo} alt="logo" />

                    </div>
                    <div className="navLinks">
                        <Link className='link' to="/home">Events</Link>
                        <Link className='link' to="/add-event">Add Event</Link>
                        <Link className='link' to="/login" onClick={() => handleLogoutMethod()}>Logout</Link>
                    </div>
                </nav>
                <Routes>
                    {/* <Route path="/home" element={token ? <List /> : <Navigate to="/login" />} />
                    <Route path="/add-event" element={token ? <AddEvent /> : <Navigate to="/login" />} /> */}
                    <Route path="/home" element={<List />} />
                    <Route path="/add-event" element={<AddEvent />} />
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


