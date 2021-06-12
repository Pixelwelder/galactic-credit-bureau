import Typography from '@material-ui/core/Typography';
import AuthStatus from './AuthStatus';

const TopBar = () => {
  return (
    <div className="app-top-bar">
      <Typography className="page-title" variant="h6">Galactic Credit Bureau</Typography>
      <AuthStatus />
    </div>
  );
};

export default TopBar;
