import './login.scss';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initFirebase from "../../helper/firebase";
import { useNavigate } from "react-router-dom";
import event from "../../assets/event.json";
import { useLottie } from "lottie-react";

function Login() {
    const options = {
        animationData: event,
        loop: true,
        autoplay: true
    };
    const { View } = useLottie(options);
    initFirebase();
    const provider = new GoogleAuthProvider();
    let navigate = useNavigate();
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
                return navigate("/");
            }

        } catch (error) {
            console.log('Something went wrong');
        }
    };

    return (
        <div className="login">
            <h1 className="title">JEBEL SIFAH LIVE</h1>
            <div className="animation">{View}</div>
            <button className='btn' onClick={() => handleAuthentication()}>Authenticate</button>
        </div>
    );
}

export default Login;

