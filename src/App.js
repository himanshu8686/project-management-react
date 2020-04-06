import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProject from './components/projects/AddProject';
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layouts/HeaderComponent';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <HeaderComponent />
        </div>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/projectForm" component={AddProject} />
      </Router>
    </div>
  );
}

export default App;
