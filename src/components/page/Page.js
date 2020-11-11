import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

const Page = ({
  children,
  containerProps,
  title,
  description,
  isLoading = false,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} {...containerProps}>
      {(title || description) && (
        <Grid item xs={12}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="subtitle1">{description}</Typography>
        </Grid>
      )}
      <Grid item xs={12}>
        {!isLoading && children}
      </Grid>
    </Grid>
  );
};

export { Page as default };
