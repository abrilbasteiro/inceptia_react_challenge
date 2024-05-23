import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.scss";
import { ContextProvider } from './context/Context';
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login';

const App: React.FC = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  }, []); 
  
  return (
    <ContextProvider>
      <Router>
      <div >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </div>
      </Router>
    </ContextProvider>
  );
};

export default App;