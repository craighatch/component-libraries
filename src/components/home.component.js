import Header from "./header/header.component";
import MainContent from "./main/main-content.component";
import { makeStyles } from '@material-ui/core/styles';
import MakeStylesExample from "./other-examples/make-styles-example.component";
import { useState } from "react";
import CustomizedSnackbars from "./other-examples/snack-bar-example.component";

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


  const myFunction = (parameter) => {
    console.log("hello from parent " + parameter);
  }

  return (
    <div className={classes.root}>
      <div>
        <Header />
      </div>
      <div className={classes.mainContent}>
        <MainContent />
      </div>
      <div className={classes.footer}>
{/* 
      <MakeStylesExample 
        isDarkTheme={false}
        testProp='hello'
        propFunction={myFunction}
      />
         */}

         {/* <CustomizedSnackbars /> */}
      </div>
    </div>
  );
}

export default Home;



