import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProject from './components/projects/AddProject';
import './App.css';

function App() {
  return (
    <div>
      <a href="/projectForm"> create a project</a>
      <Router>

        <Route path="/projectForm" component={AddProject} />
      </Router>
    </div>
  );
}

export default App;
