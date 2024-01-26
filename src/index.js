import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { AppProvider } from 'Store/AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter basename="/food-mentor">
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
