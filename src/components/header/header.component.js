import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

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

  return (
    <div className={classes.root}>
      <div>CREDERA</div>

      <MenuIcon color='secondary'/>
    </div>
  );
}

export default Header;