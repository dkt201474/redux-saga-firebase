# redux-saga-firebase
[![CircleCI](https://circleci.com/gh/n6g7/redux-saga-firebase.svg?style=svg)](https://circleci.com/gh/n6g7/redux-saga-firebase)
[![npm version](https://badge.fury.io/js/redux-saga-firebase.svg)](https://badge.fury.io/js/redux-saga-firebase)
[![Coverage Status](https://coveralls.io/repos/github/n6g7/redux-saga-firebase/badge.svg?branch=master)](https://coveralls.io/github/n6g7/redux-saga-firebase?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/n6g7/redux-saga-firebase/badge.svg)](https://snyk.io/test/github/n6g7/redux-saga-firebase)


A [redux-saga](https://github.com/redux-saga/redux-saga/) integration for [firebase](https://firebase.google.com/).

- Try out the [example app](https://redux-saga-firebase.firebaseapp.com/) and browse its [code](https://github.com/n6g7/redux-saga-firebase/blob/master/example/).
- It also works with React Native 📱! Here's a very simple example: https://github.com/n6g7/cat/tree/master/rn.
- Browse the docs at [https://n6g7.github.io/redux-saga-firebase/](https://n6g7.github.io/redux-saga-firebase/).

## Quick start

Install with:

```js
yarn add redux-saga-firebase
```

Initialize a firebase app and instanciate redux-saga-firebase:

```js
import firebase from 'firebase';
import '@firebase/firestore'; // 👈 If you're using firestore
import ReduxSagaFirebase from 'redux-saga-firebase';

const myFirebaseApp = firebase.initializeApp({
  apiKey: "qosjdqsdkqpdqldkqdkfojqjpfk",
  authDomain: "my-app.firebaseapp.com",
  databaseURL: "https://my-app.firebaseio.com",
});

const reduxSagaFirebase = new ReduxSagaFirebase(myFirebaseApp)
```

You can now use `reduxSagaFirebase` methods in your sagas:

```js
function* syncSaga() {
  yield fork(
    reduxSagaFirebase.database.sync,
    'todos',
    { successActionCreator: syncTodos }
  );
}
```

Make sure your client provides a implementation of [`fetch`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API), either natively or via a polyfill ([`whatwg-fetch`](https://www.npmjs.com/package/whatwg-fetch) is a pretty good one).

## API

### Index

**Authentication**

- [`*auth.applyActionCode(code)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#applyActionCode)
- [`auth.channel()`](https://n6g7.github.io/redux-saga-firebase/reference/auth#channel)
- [`*auth.confirmPasswordReset(code, newPassword)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#confirmPasswordReset)
- [`*auth.createUserWithEmailAndPassword(email, password)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#createUserWithEmailAndPassword)
- [`*auth.linkWithPopup(authProvider)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#linkWithPopup)
- [`*auth.linkWithRedirect(authProvider)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#linkWithRedirect)
- [`*auth.sendEmailVerification(actionCodeSettings)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#sendEmailVerification)
- [`*auth.sendPasswordResetEmail(email, actionCodeSettings)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#sendPasswordResetEmail)
- [`*auth.signInAndRetrieveDataWithCredential(credential)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#signInAndRetrieveDataWithCredential)
- [`*auth.signInAnonymously()`](https://n6g7.github.io/redux-saga-firebase/reference/auth#signInAnonymously)
- [`*auth.signInWithCredential(credential)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#signInWithCredential)
- [`*auth.signInWithCustomToken(token)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#signInWithCustomToken)
- [`*auth.signInWithEmailAndPassword(email, password)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#signInWithEmailAndPassword)
- [`*auth.signInWithPhoneNumber(phoneNumber, applicationVerifier)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#signInWithPhoneNumber)
- [`*auth.signInWithPopup(authProvider)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#signInWithPopup)
- [`*auth.signInWithRedirect(authProvider)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#signInWithRedirect)
- [`*auth.signOut()`](https://n6g7.github.io/redux-saga-firebase/reference/auth#signOut)
- [`*auth.unlink(authProvider)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#unlink)
- [`*auth.updateEmail(email)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#updateEmail)
- [`*auth.updatePassword(password)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#updatePassword)
- [`*auth.updateProfile(profile)`](https://n6g7.github.io/redux-saga-firebase/reference/auth#updateProfile)

**Database**

- [`*database.read(path)`](https://n6g7.github.io/redux-saga-firebase/reference/database#read)
- [`*database.create(path, data)`](https://n6g7.github.io/redux-saga-firebase/reference/database#create)
- [`*database.update(path, data)`](https://n6g7.github.io/redux-saga-firebase/reference/database#update)
- [`*database.patch(path, data)`](https://n6g7.github.io/redux-saga-firebase/reference/database#patch)
- [`*database.delete(path)`](https://n6g7.github.io/redux-saga-firebase/reference/database#delete)
- [`database.channel(path, event, buffer)`](https://n6g7.github.io/redux-saga-firebase/reference/database#channel)
- [`*database.sync(path, options, event)`](https://n6g7.github.io/redux-saga-firebase/reference/database#sync)

**Firestore**

- [`*firestore.addDocument(collectionRef, data)`](https://n6g7.github.io/redux-saga-firebase/reference/firestore#addDocument)
- [`firestore.channel(pathOrRef, type, buffer)`](https://n6g7.github.io/redux-saga-firebase/reference/firestore#channel)
- [`*firestore.deleteDocument(documentRef)`](https://n6g7.github.io/redux-saga-firebase/reference/firestore#deleteDocument)
- [`*firestore.getCollection(collectionRef)`](https://n6g7.github.io/redux-saga-firebase/reference/firestore#getCollection)
- [`*firestore.getDocument(docRef)`](https://n6g7.github.io/redux-saga-firebase/reference/firestore#getDocument)
- [`*firestore.setDocument(docRef, data, options)`](https://n6g7.github.io/redux-saga-firebase/reference/firestore#setDocument)
- [`*firestore.syncCollection(pathOrRef, options)`](https://n6g7.github.io/redux-saga-firebase/reference/firestore#syncCollection)
- [`*firestore.syncDocument(pathOrRef, options)`](https://n6g7.github.io/redux-saga-firebase/reference/firestore#syncDocument)
- [`*firestore.updateDocument(docRef, ...args)`](https://n6g7.github.io/redux-saga-firebase/reference/firestore#updateDocument)

**Functions**

- [`*functions.call(functionName, queryParams={}, init={})`](https://n6g7.github.io/redux-saga-firebase/reference/functions#call)

**Messaging**

- [`messaging.channel()`](https://n6g7.github.io/redux-saga-firebase/reference/messaging#channel)
- [`*messaging.syncMessages(options)`](https://n6g7.github.io/redux-saga-firebase/reference/messaging#syncMessages)
- [`*messaging.syncToken(options)`](https://n6g7.github.io/redux-saga-firebase/reference/messaging#syncToken)
- [`messaging.tokenRefreshChannel()`](https://n6g7.github.io/redux-saga-firebase/reference/messaging#tokenRefreshChannel)

**Storage**

- [`storage.uploadFile(path, file, metadata)`](https://n6g7.github.io/redux-saga-firebase/reference/storage#uploadFile)
- [`storage.uploadString(path, string, format, metadata)`](https://n6g7.github.io/redux-saga-firebase/reference/storage#uploadString)
- [`*storage.getDownloadURL(path)`](https://n6g7.github.io/redux-saga-firebase/reference/storage#getDownloadURL)
- [`*storage.getFileMetadata(path)`](https://n6g7.github.io/redux-saga-firebase/reference/storage#getFileMetadata)
- [`*storage.updateFileMetadata(path, newMetadata)`](https://n6g7.github.io/redux-saga-firebase/reference/storage#updateFileMetadata)
- [`*storage.deleteFile(path)`](https://n6g7.github.io/redux-saga-firebase/reference/storage#deleteFile)
