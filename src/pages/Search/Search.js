import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import { useState, useMemo, useEffect } from 'react';
import { useSearch } from '../../hooks';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    marginTop: '20px',
    marginBottom: '20px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
const Search = () => {
  const classes = useStyles();
  const [type, setType] = useState('location');
  const [location, setLocation] = useState();
  const [loading, error, data] = useSearch({ location });
  const onChange = (event) => {
    const { value } = event.target;
    setLocation(value);
  };
  useEffect(() => {
    console.log({ location });
  }, [location]);
  return (
    <>
      <div className={classes.root}>
        <Paper component="form" className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Search for data"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          {loading && !location && <CircularProgress />}
        </Paper>
      </div>
      {!loading && error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Could not load data from backend service
        </Alert>
      )}
    </>
  );
};

export { Search as default };
