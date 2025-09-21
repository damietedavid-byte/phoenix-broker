
import React from 'react';
import ReactDOM from 'react-dom/client';
// FIX: Using HashRouter instead of BrowserRouter to ensure compatibility with the deployment environment.
// BrowserRouter can cause issues in environments that serve the app from a sub-path without server-side rewrites.
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);