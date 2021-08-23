import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  customStyles: {
    backgroundColor: 'pink',
    color: 'black'
  }
}));

const CustomizedSnackbars = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} onClose={handleClose} classes={{ root: classes.colorPink }}>
        <Alert onClose={handleClose} severity="success" classes={{ message: classes.customStyles }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CustomizedSnackbars;
