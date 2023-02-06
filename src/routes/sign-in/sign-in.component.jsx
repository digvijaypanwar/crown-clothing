import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import './sign-in.styles.scss';
function SignIn() {
    useEffect(() => {
        const getRedirectRes = async () => {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(
                    response.user
                );
            }
        };

        getRedirectRes();
    }, []);

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div>
            SignIn
            <button onClick={logGoogleUser}>Sign in with Google Popup </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect{' '}
            </button>
        </div>
    );
}
export default SignIn;
