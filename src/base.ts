import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyB5aLuZdFrs6PAmGI_uIUaWRlnAnpxXz2Q',
    authDomain: 'chatapp-1c783.firebaseapp.com',
    databaseURL: 'https://chatapp-1c783.firebaseio.com'
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
