
const { initializeApp } = require("firebase/app")
const {getStorage} = require("firebase/storage")

const firebaseConfig = {
    apiKey: "AIzaSyCmbZBcYyc-YlPFe5bCZ527usXvaAzdQ2c",
    authDomain: "crud-app-nodejs.firebaseapp.com",
    projectId: "crud-app-nodejs",
    storageBucket: "crud-app-nodejs.appspot.com",
    messagingSenderId: "392437189471",
    appId: "1:392437189471:web:845ee2cb7461a0151644ea",
    measurementId: "G-VPPMZ9200W"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
module.exports = getStorage (firebaseApp)