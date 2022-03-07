import './login.scss';
import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initFirebase from "../../helper/firebase";
import { useNavigate } from "react-router-dom";
import { sessionStatus } from '../../helper/authorization';

function Login() {
    initFirebase();
    const provider = new GoogleAuthProvider();
    let navigate = useNavigate();
    const [token, setToken] = useState(sessionStatus());
    const auth = getAuth();
    const handleAuthentication = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const { user } = result;
            if (!user) {
                throw new Error("The was an issue authorizing");
            }

            // for specific users
            if (user.email === "events.jebelsifah@gmail.com") {
                window.sessionStorage.setItem("userDisplayName", `${user.displayName}`);
                window.sessionStorage.setItem("isUserLoggedIn", "true");
                setToken(sessionStatus());
                return navigate("/");
            }

        } catch (error) {
            setToken(false);
        }
    };

    function handleRedirect() {
        navigate("/");
    }

    useEffect(() => {
        setToken(sessionStatus());
    }, []);

    return (
        <div className="login">
            {token ? <h1 className="title">Welcome</h1> : <h1 className="title">Jebel Sifah Live Login</h1>}
            {token ? <button className='btn' onClick={() => handleRedirect()}>Goto Dahboard</button>
                : <button className='btn' onClick={() => handleAuthentication()}>Authenticate</button>}
        </div>
    );
}

export default Login;

