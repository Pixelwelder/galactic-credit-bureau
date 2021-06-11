import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { imgurConfig } from '../../config';

const Main = () => {
  const onAuth = () => {
    const url = `${imgurConfig.authorizeUrl}?client_id=${imgurConfig.clientId}&response_type=token&state=state`;
    window.location.href = url;
  };

  return (
    <div>
      <Typography>Main</Typography>
      <Button variant="contained" onClick={onAuth}>Imgur</Button>
    </div>
  );
};

export default Main;
