import React from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Header from './Header';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Dashboard />
      </Route>
    </div>
  );
}

export default App;
