import { useNavigate } from "react-router-dom";
import { signInWithGooglePopup } from "../firebase"

const SignIn = () => {
    const navigate = useNavigate(); // React Router hook for navigation
    const logGoogleUser = async () => {
            const response = await signInWithGooglePopup();
            console.log(response);
            if (response) {
                navigate("/dashboard"); // Redirect after successful login
            }
        }
    return (
            <div>
                <button onClick={logGoogleUser}>Sign In With Google</button>
            </div>
        )
}
export default SignIn;