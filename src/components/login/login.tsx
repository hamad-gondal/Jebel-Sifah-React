import './login.scss';
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initFirebase from "../../helper/firebase";
import { useNavigate } from "react-router-dom";

function Login() {
    initFirebase();
    const provider = new GoogleAuthProvider();
    let navigate = useNavigate();
    const [authorizing, setAuthorizing] = useState(false);
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
                window.localStorage.setItem("userDisplayName", `${user.displayName}`);
                window.localStorage.setItem("isUserLoggedIn", "true");
                setAuthorizing(true);
                return navigate("/home");
            }

        } catch (error) {
            setAuthorizing(false);
        }
    };

    return (
        <div className="login">
            <h1 className="title">Jebel Sifah Live Login</h1>
            {!authorizing ? '' : setTimeout(() => { <p className="error">User Not Allowed</p> }, 3000)}
            <button className='btn' onClick={() => handleAuthentication()}>Authenticate</button>
        </div>
    );
}

export default Login;

