import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Store from './Store';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import Register from './pages/Register';


const App = () => {

  return (
    <Store>
      <Router>
        <Route path='/shop' component={Shop} />
        <Route path='/profile' component={Profile} />
        <Route path='/register' component={Register} />

      </Router>
    </Store>
  );
}

export default App;
