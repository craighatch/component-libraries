import Header from "./header/header.component";
import MainContent from "./main/main-content.component";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column'
  },
  mainContent: {
    flexGrow: 1,
    background: 'linear-gradient(90deg, #706c6c, #ffffff)',
  },
  footer: {
    minHeight: '50px'
  }
});

const Home = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Header />
      </div>
      <div className={classes.mainContent}>
        {/* <MainContent /> */}
        <div>main content area</div>
      </div>
      <div className={classes.footer}></div>
    </div>
  );
}

export default Home;



