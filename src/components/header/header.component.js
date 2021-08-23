import { makeStyles, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5px 15px 5px 15px',
    minHeight: '50px',
    alignItems: 'center'
  },
  mainContent: {
    background: 'linear-gradient(90deg, #706c6c, #ffffff)',
    flexGrow: 1
  },
  hamburgerMenu: {
    'color': '#E26751'
  }
});


const Header = (props) => {
  const classes = useStyles(props);

  const menuItems = ["Services", "Industries", "Our Firm", 'Careers', 'Insights'];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    console.log(`User clicked on ${event.target.innerText}`);
  };

  return (
    <div className={classes.root}>
      <div>CREDERA</div>

      <MenuIcon color='secondary' onClick={handleClick} />
      
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
        
      >
        {menuItems.map(menuItem => (<MenuItem key={menuItem} onClick={handleClose}>{menuItem}</MenuItem>))}
      </Menu>
    </div>
  );
}

export default Header;