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

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if (!userAuth){
    return
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();

  if (!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})

export const  SignInWithGoogle = () =>  auth.signInWithPopup(provider)

export default firebase;