import Typography from '@material-ui/core/Typography'
import { useEffect } from 'react';
import { actions as authActions } from '../../app/authSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const AuthCallback = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(authActions.getToken())
    history.push('/');
  }, []);

  return (
    <div>
      <Typography>AuthCallback</Typography>
    </div>
  );
};

export default AuthCallback;
