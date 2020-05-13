import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


const config = {
  apiKey: "AIzaSyAegIsLIPZp2iTn6anlgYBdDjsSdJft2nA",
  authDomain: "fashion-mart-65e96.firebaseapp.com",
  databaseURL: "https://fashion-mart-65e96.firebaseio.com",
  projectId: "fashion-mart-65e96",
  storageBucket: "fashion-mart-65e96.appspot.com",
  messagingSenderId: "434357603",
  appId: "1:434357603:web:e23b128c4dba11a580bf56",
  measurementId: "G-QV920TJ4CZ"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})

export const  SignInWithGoogle = () =>  auth.signInWithPopup(provider)

export default firebase;