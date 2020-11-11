import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';
import { Tabs } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import MovieIcon from '@material-ui/icons/Movie';
import IconButton from '@material-ui/core/IconButton';
import { withRouter, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: 135,
    height: 43.54,
  },
});

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <nav className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid justify={'space-between'} container>
            <Grid xs={1} item>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={() => history.push('/')}
              >
                <MovieIcon />
              </IconButton>
            </Grid>
            <Grid xs={4} item>
              <Grid container>
                <Tabs
                  onChange={(_, value) => history.push(value)}
                  value={history.location.pathname}
                  aria-label="Navigation Tabs"
                  centered
                >
                  <Tab label={'Total movie data'} value="/" />
                  <Tab label={'Search'} value="/search" />
                </Tabs>
              </Grid>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Toolbar>
      </AppBar>
    </nav>
  );
};

export default withRouter(Header);
