import React from 'react';
import HomePage from './pages/homepage/homepage'
import { Switch, Route } from 'react-router-dom'
import Header from './component/header/header.component'



import './App.css';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path ='/' component ={ HomePage }/>    
      </Switch>
    </div>
  );
}

export default App;
