import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions as appActions, selectors as appSelectors } from './app/appSlice';

import './App.css';
import Main from './features/Main';
import AuthCallback from './features/AuthCallback';
import { useEffect } from 'react';

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
      {!isInitialized
        ? (<p>Loading...</p>)
        : (
          <Switch>
            <Route path="/imgur-auth-callback">
              <AuthCallback />
            </Route>
            <Route>
              <Main />
            </Route>
          </Switch>
        )
      }
    </div>
  );
}

export default App;
