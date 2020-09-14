import firebase from 'firebase/app';
import 'firebase/database';
import { object, QueryChange } from 'rxfire/database';
import { Observable } from 'rxjs';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyB5aLuZdFrs6PAmGI_uIUaWRlnAnpxXz2Q',
    authDomain: 'chatapp-1c783.firebaseapp.com',
    databaseURL: 'https://chatapp-1c783.firebaseio.com'
});

const database = firebase.database();

const userChannels$ = (uuid: string): Observable<QueryChange> => {
    return object(database.ref('users/' + uuid + '/channels'));
};

const channels$ = (key: string): Observable<QueryChange> => {
    return object(database.ref('channels/' + key));
};

const fire$ = (key: string): Observable<QueryChange> => {
    return object(database.ref(key));
};

export { database, userChannels$, channels$, fire$ };

export default firebaseApp;
