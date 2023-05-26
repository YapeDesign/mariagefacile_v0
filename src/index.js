import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, push, set } from 'firebase/database';

import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
    apiKey: "AIzaSyAJ19dy4_tCSr7D_SreqEoNZgjtACtrsuw",
    authDomain: "mariagefacile-v0.firebaseapp.com",
    databaseURL: "https://mariagefacile-v0-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "mariagefacile-v0",
    storageBucket: "mariagefacile-v0.appspot.com",
    messagingSenderId: "379383151950",
    appId: "1:379383151950:web:bf3fb2bc143d3be8db721f",
    measurementId: "G-7F8NFJQ5J0"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


// Référence à l'emplacement "guests" dans la base de données
const guestsRef = ref(database, 'guests');

// Données à enregistrer
const guestData = {
  name: 'John Doe',
  email: 'john@example.com',
  company: 'Mariage Facile',
  role: 'CEO',
  isVerified: true,
  status: 'active',
  attending: true
};

// Utilisez la méthode set sur la référence pour enregistrer les données
    // set(guestsRef, guestData)
    // .then(() => {
    //     console.log('Données enregistrées avec succès');
    // })
    // .catch((error) => {
    //     console.error('Erreur lors de l\'enregistrement des données:', error);
    // });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
serviceWorker.unregister();
reportWebVitals();
