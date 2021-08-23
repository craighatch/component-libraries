import { makeStyles } from "@material-ui/core";
import Header from "./header/header.component";
import MainContent from "./main/main-content.component";
import GridExample from "./other-examples/grid-example.component";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  mainContent: {
    background: 'linear-gradient(90deg, #706c6c, #ffffff)',
    flexGrow: 1
  },
  footer: {
    minHeight: '50px'
  }
});

const Home = (props) => {

  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <div>
        <Header />
      </div>
      <div className={`${classes.mainContent} ${classes.flexGrowOne}`}>
        <MainContent />
      </div>
      <div className={classes.footer}></div>
    </div>
  );
}

export default Home;



