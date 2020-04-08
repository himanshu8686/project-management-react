import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddProject from './components/projects/AddProject';
import UpdateProject from './components/projects/UpdateProject';
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layouts/HeaderComponent';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div>
            <HeaderComponent />
          </div>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/projectForm" component={AddProject} />
          <Route path="/updateProject/:id" component={UpdateProject} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
