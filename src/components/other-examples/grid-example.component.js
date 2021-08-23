import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: '20px'
  },
  paper: {
    minHeight: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const GridExample = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>

        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>xs=1</Paper>
        </Grid>
      </Grid>
      {/* <br /><br />
      <hr />
      <br /><br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>element 1</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>element 2</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>element 3</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>element 4</Paper>
        </Grid>
      </Grid> */}
    </div>
  );
}

export default GridExample;