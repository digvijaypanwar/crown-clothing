// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDy0qyuhTKb3IgNhKxV3m-LRVurq0-6Ugo',
    authDomain: 'crown-clothing-db-fe5bb.firebaseapp.com',
    projectId: 'crown-clothing-db-fe5bb',
    storageBucket: 'crown-clothing-db-fe5bb.appspot.com',
    messagingSenderId: '173635691879',
    appId: '1:173635691879:web:104d82797bc03718223bc2',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userauth) => {
    const userDocRef = doc(db, 'users', userauth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userauth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (err) {
            console.log('error creating the user', err.message);
        }
    }

    return userDocRef;
};
