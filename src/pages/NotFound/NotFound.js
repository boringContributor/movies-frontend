import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const NotFound = () => {
  const classes = useStyles();
  const history = useHistory();

  setTimeout(() => {
    history.push('/');
  }, 3000);

  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h2">
        Page Not Found
      </Typography>
    </div>
  );
};

export { NotFound as default };
