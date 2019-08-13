import React, {useContext} from 'react';
import Store from './Store';
import Storefront from './pages/Storefront';

const App = () => {
  return (
    <Store>
      <Storefront/>
    </Store>
  );
}

export default App;
