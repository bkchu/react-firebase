import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config.firebase);

const database = firebase.database();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { firebase, githubAuthProvider, database as default };
