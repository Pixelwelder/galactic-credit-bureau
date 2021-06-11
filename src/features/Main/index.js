import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { imgurConfig } from '../../config';
import { selectors as authSelectors } from '../../app/authSlice';
import { useSelector } from 'react-redux';

const Main = () => {
  const { avatar, token } = useSelector(authSelectors.select);

  const onAuth = () => {
    const url = `${imgurConfig.authorizeUrl}?client_id=${imgurConfig.clientId}&response_type=token&state=state`;
    window.location.href = url;
  };

  return (
    <div className="main-page">
      {avatar && (<img className="avatar" src={avatar} />)}
      {token && <Typography variant="h5">{token.account_username}</Typography>}
      {!token && <Button variant="contained" onClick={onAuth}>Imgur</Button>}
    </div>
  );
};

export default Main;
