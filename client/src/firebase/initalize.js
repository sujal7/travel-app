import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// require('dotenv').config();

/**
 * Firebase configuration
 */

const firebaseConfig = {
  apiKey: 'AIzaSyBkMJmOp0aibuhfUryGshM4nm9uYHrvHeY',
  authDomain: 'travel-app-4ee87.firebaseapp.com',
  projectId: 'travel-app-4ee87',
  storageBucket: 'travel-app-4ee87.appspot.com',
  messagingSenderId: '284099161356',
  appId: '1:284099161356:web:f0a8a7863a43de12d5ed29',
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Gets the firebase Storage
const storage = getStorage(app);

export { storage, app };
