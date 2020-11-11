import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = (theme) => ({
    header: {
        margin: `${theme.spacing(2)}px 0`,
    },
});

const PageHeader = ({ classes, title, description }) => (
    <div className={classes.header}>
        <Typography variant='h5'>{title}</Typography>
        <Typography variant='subtitle1'>{description}</Typography>
    </div>
);


export default withStyles(styles)(PageHeader);
