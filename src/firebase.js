import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCK3Fyl1SUwSZB4iIFTYNIzCHcweHKpuIg',
    authDomain: 'grace-church-portal.firebaseapp.com',
    projectId: 'grace-church-portal',
    storageBucket: 'grace-church-portal.appspot.com',
    messagingSenderId: '902194713279',
    appId: '1:902194713279:web:74bf758fa2f49295222c0a',
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const { auth } = firebase;

// eslint-disable-next-line no-restricted-globals
// if (location.hostname === 'localhost') {
//     db.useEmulator('localhost', 8080);
//     auth().useEmulator('http://localhost:9099/', { disableWarnings: true });
// }

export default firebase;
export { db, auth };
