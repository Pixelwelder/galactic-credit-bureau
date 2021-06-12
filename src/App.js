import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions as appActions, selectors as appSelectors } from './app/appSlice';

import './App.scss';
import Main from './features/Main';
import AuthCallback from './features/AuthCallback';
import { useEffect } from 'react';
import Admin from './features/Admin';
import RestrictedRoute from './components/RestrictedRoute';
import SignIn from './features/SignIn';
import TopBar from './features/TopBar';

function App() {
  const { isInitialized } = useSelector(appSelectors.select);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isInitialized) {
      dispatch(appActions.init());
    }
  }, [isInitialized, dispatch]);

  return (
    <div className="App">
      <SignIn />

      <TopBar />

      <div className="app-content">
        {!isInitialized
          ? (<p>Loading...</p>)
          : (
            <Switch>
              <Route path="/imgur-auth-callback">
                <AuthCallback />
              </Route>
              <RestrictedRoute path="/admin" redirect="/">
                <Admin />
              </RestrictedRoute>
              <Route>
                <Main />
              </Route>
            </Switch>
          )
        }
      </div>

      <div className="app-footer">

      </div>
    </div>
  );
}

export default App;
