import React from 'react'
import ReactDom from 'react-dom'
import './index.css';
import App from './App'
import Navbar from './components/Navbar';

ReactDom.render(
    <React.StrictMode>
        <Navbar />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
