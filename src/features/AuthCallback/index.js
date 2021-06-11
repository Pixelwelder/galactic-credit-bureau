import Typography from '@material-ui/core/Typography'
import { useEffect } from 'react';
import getQueryString from '../../util/getQueryString';

const AuthCallback = () => {
  useEffect(() => {
    const queryString = getQueryString();
    console.log(queryString);
  }, []);

  return (
    <div>
      <Typography>AuthCallback</Typography>
    </div>
  );
};

export default AuthCallback;
