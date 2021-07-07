// dependencies
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

// components
import CelebDisplay from './components/CelebDisplay';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import Login from './components/Login';
import NavBar from './components/NavBar';
import UnregisteredPlayerModal from './components/UnregisteredPlayerModal';
import RegisteredPlayerModal from './components/RegisteredPlayerModal';

import PrivateRoute from "./components/PrivateRoute";

// context api providers
import { UserDataProvider } from './contexts/UserDataContext';

function App() {
  const [userData, setUserData] = useState({})

  

  return (
    <Router>
      <div className="App">
        <UserDataProvider value={{ userData, setUserData }}>
          <NavBar />
          <Route exact path={'/'} component={Welcome} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/game" component={CelebDisplay} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/modal" component={UnregisteredPlayerModal} />
          <PrivateRoute
            exact
            path="/registered"
            component={RegisteredPlayerModal}
          />
        </UserDataProvider>
      </div>
    </Router>
  );
}

export default App;
