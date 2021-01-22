import * as firebase from 'firebase';
//const firebase = jest.requireActual('firebase')
const onAuthStateChanged = jest.fn();

const getRedirectResult = jest.fn(() => Promise.resolve({
  user: {
    displayName: 'redirectResultTestDisplayName',
    email: 'redirectTest@test.com',
    emailVerified: true,
  },
}));

const sendEmailVerification = jest.fn(() => Promise.resolve('result of sendEmailVerification'));

const sendPasswordResetEmail = jest.fn(() => Promise.resolve());

const createUserWithEmailAndPassword = jest.fn(() => {
  console.log('Kayıt başarılı');
  return Promise.resolve({
    user: {
      displayName: 'redirectResultTestDisplayName',
      email: 'redirectTest@test.com',
      emailVerified: true,
    },
  });
});

const signInWithEmailAndPassword = jest.fn(() => Promise.resolve('result of signInWithEmailAndPassword'));

const signInWithRedirect = jest.fn(() => Promise.resolve('result of signInWithRedirect'));

const initializeApp = jest // eslint-disable-line no-unused-vars
  .spyOn(firebase, 'initializeApp')
  .mockImplementation(() => ({
    auth: () => ({
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      currentUser: {
        sendEmailVerification,
      },
      signInWithRedirect,
    }),
  }));

jest.spyOn(firebase, 'auth').mockImplementation(() => ({
  onAuthStateChanged,
  currentUser: {
    displayName: 'testDisplayName',
    email: 'test@test.com',
    emailVerified: true,
  },
  getRedirectResult,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
}));

firebase.auth.FacebookAuthProvider = jest.fn(() => {});
firebase.auth.GoogleAuthProvider = jest.fn(() => {});