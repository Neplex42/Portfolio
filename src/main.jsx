import React from 'react'; // Importe la bibliothèque React pour créer des composants.
import ReactDOM from 'react-dom/client'; // Importe la bibliothèque ReactDOM pour le rendu dans le DOM.
import App from './App.jsx'; // Importe le composant racine de l'application depuis le fichier 'App.jsx'.
import './index.css'; // Importe les styles CSS pour l'application.

// Utilise la méthode createRoot de ReactDOM pour initialiser le rendu de l'application sur l'élément avec l'ID 'root' dans le DOM.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

//Ce code crée un "arbre de rendu" pour l'application React, en l'initialisant dans l'élément avec l'ID 'root'. Il rend ensuite le composant racine 'App' dans cet arbre de rendu, en l'enveloppant dans <React.StrictMode>. Cela garantit que l'application suit les meilleures pratiques et effectue des vérifications supplémentaires en mode strict.