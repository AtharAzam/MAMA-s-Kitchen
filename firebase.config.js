import firebase from '@react-native-firebase/app';

var firebaseConfig = {
  apiKey: 'AIzaSyDYoqqZvidTnquSGevVjSZPy-BGMQukebo',
  authDomain: 'mama-s-kitchen-68e44.firebaseapp.com',
  databaseURL: 'https://mama-s-kitchen-68e44.firebaseio.com',
  projectId: 'mama-s-kitchen-68e44',
  storageBucket: 'mama-s-kitchen-68e44.appspot.com',
  messagingSenderId: '576786420406',
  appId: '1:576786420406:web:e9351a0a336630e00acc17',
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
