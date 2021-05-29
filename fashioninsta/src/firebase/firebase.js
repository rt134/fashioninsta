import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDtTmdCI6kGHCaqajjHP9SNzqze0qr3ZR8",
    authDomain: "fashion-db-c4134.firebaseapp.com",
    projectId: "fashion-db-c4134",
    storageBucket: "fashion-db-c4134.appspot.com",
    messagingSenderId: "784537225592",
    appId: "1:784537225592:web:eb9becf89e57a681a1a08d",
    measurementId: "G-C90GWSKZDN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;