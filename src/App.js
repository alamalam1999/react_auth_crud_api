import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Auth/Login'; // Assuming Login is in the same folder
import Dashboard from './view/Dashboard'; // Assuming Dashboard is in the same folder
import ProtectedRoute from './ProtectedRoute';
import Register from './Auth/Register';
import AddBooks from './view/AddBooks';
import UpdatedBooks from './view/UpdatedBooks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
        <Route path="/addbook" element={
          <ProtectedRoute>
            <AddBooks />
          </ProtectedRoute>
        } />
        <Route path="/updatebooks/:id" element={
          <ProtectedRoute>
            <UpdatedBooks />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
