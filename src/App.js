import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';

import logo from './logo.svg';
import './App.css';
import Main from './features/Main';
import AuthCallback from './features/AuthCallback';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
          <Switch>
            <Route path="/auth-callback">
              <AuthCallback />
            </Route>
            <Route>
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
