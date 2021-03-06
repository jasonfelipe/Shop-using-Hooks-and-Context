import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Store from './Store';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import Register from './pages/Register';


const App = () => {

  return (
    <Store>
      <Router>
        <Route exact path='/' component={Shop} />
        <Route path='/profile' component={Profile} />
        <Route path='/register' component={Register} />

      </Router>
    </Store>
  );
}

export default App;
