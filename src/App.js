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
          <Switch>
            <Route path="/imgur-auth-callback">
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
