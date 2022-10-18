// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBo49iOpk_2YJNohS4ty31QLe4-WUTT47o',
  authDomain: 'clone-b73bd.firebaseapp.com',
  projectId: 'clone-b73bd',
  storageBucket: 'clone-b73bd.appspot.com',
  messagingSenderId: '1096446206373',
  appId: '1:1096446206373:web:618b5db5a387bb645f484c',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore();
export const auth = getAuth();

export default app;
