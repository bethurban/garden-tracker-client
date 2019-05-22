import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDHBMSNYT9lbbtoXBfe6u0z_y5jLgH0kB8",
    authDomain: "garden-tracker-a4687.firebaseapp.com",
    databaseURL: "https://garden-tracker-a4687.firebaseio.com",
    projectId: "garden-tracker-a4687",
    storageBucket: "garden-tracker-a4687.appspot.com",
    messagingSenderId: "646871013192",
    appId: "1:646871013192:web:940586622a975a62"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
