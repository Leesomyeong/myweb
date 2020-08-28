import * as firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyCvaIJDiNufIbN2T8pQcoyoaNVpma_LmZA",
      authDomain: "yimchoonlee.firebaseapp.com",
      databaseURL: "https://yimchoonlee.firebaseio.com",
      projectId: "yimchoonlee",
      storageBucket: "yimchoonlee.appspot.com",
      messagingSenderId: "918466811096",
      appId: "1:918466811096:web:f264caf2f2ad35241633ad",
      measurementId: "G-W1NHNQYB8J"

}

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const db = firebase.firestore()

  export {auth, db} 
