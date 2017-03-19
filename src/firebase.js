import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAM-RFTd-6ODHL8J3LmNtKBEFZCp3rjZso',
  authDomain: 'social-animals-bae43.firebaseapp.com',
  databaseURL: 'https://social-animals-bae43.firebaseio.com',
  storageBucket: 'social-animals-bae43.appspot.com',
  messagingSenderId: '69259618406'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
