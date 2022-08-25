import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from "firebase/compat/app";
import {getDatabase} from 'firebase/database';
import "firebase/compat/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAnhko3vHgYlpG5aVwv_q7L4Mdut1NOwlY",
    authDomain: "lfk-rating-e13d5.firebaseapp.com",
    databaseURL: "https://lfk-rating-e13d5-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lfk-rating-e13d5",
    storageBucket: "lfk-rating-e13d5.appspot.com",
    messagingSenderId: "703357347734",
    appId: "1:703357347734:web:010e99ed577d511df81fb7"
})

export const Context = createContext(null);
const database = getDatabase(app);
const auth = app.auth();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{firebase, database, auth}}>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Context.Provider>
);
