//libraries
import React from 'react';
import ReactDOM from 'react-dom/client'

//components
import App from './App';


const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
