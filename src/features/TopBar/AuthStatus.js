import app from 'firebase/app';
import Typography from '@material-ui/core/Typography';
import { selectors as authSelectors } from '../../app/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { actions as authActions } from '../../app/authSlice';

const AuthStatus = () => {
  const { isSignedIn } = useSelector(authSelectors.select);
  const dispatch = useDispatch();

  const onSignIn = () => {};

  const onSignOut = () => {
    dispatch(authActions.signOut());
  };

  return (
    <div className="auth-status">
      {isSignedIn
        ? (
          <>
            <Typography className="user-name">
              {app.auth().currentUser.displayName}
            </Typography>
            <Button variant="outlined" size="small" onClick={onSignOut}>Sign Out</Button>
          </>
        )
        : (
          <Button variant="outlined" size="small" onClick={onSignIn}>Sign In</Button>
        )
      }
    </div>
  );
};

export default AuthStatus;
