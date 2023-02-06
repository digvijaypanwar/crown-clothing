import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import './sign-in.styles.scss';
function SignIn() {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(user);
    };
    return (
        <div>
            SignIn
            <button onClick={logGoogleUser}>Sign in with Google Popup </button>
        </div>
    );
}
export default SignIn;
