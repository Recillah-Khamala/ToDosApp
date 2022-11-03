import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NotMatch from './pages/NotMatch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route element={<TodoContainer />} path="/" />
        <Route element={<About />} path="/About" />
        <Route element={<NotMatch />} Path="*" />
      </Routes>
    </Router>
  </React.StrictMode>,
);
