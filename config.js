import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAeXbM9jLn4O30dqAsOkht9xvWwB1p1dlg",
    authDomain: "produtos-dded1.firebaseapp.com",
    projectId: "produtos-dded1",
    storageBucket: "produtos-dded1.appspot.com",
    messagingSenderId: "36466495560",
    appId: "1:36466495560:web:e851c4e9a1db65c197887d",
    measurementId: "G-027N18SXWF"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { firebaseConfig, auth, db };
