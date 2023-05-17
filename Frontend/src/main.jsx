import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer position='bottom-right' />
    <Navbar />
    <App />
  </React.StrictMode>
);
