import { Route, Redirect } from 'react-router-dom';
import app from 'firebase/app';

const RestrictedRoute = ({ redirect = 'sign-in', ...routeParams }) => {
  return !!app.auth().currentUser
    ? <Route {...routeParams} />
    : <Redirect to={redirect} />;
};

export default RestrictedRoute;
