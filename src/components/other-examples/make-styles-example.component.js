
import { makeStyles } from "@material-ui/core";
import Home from "../home.component";


//makeStyles accepts the theme object of our app and returns a function to which we can pass our component props
const useStyles = makeStyles((theme) => {
  return {
    root: (props) => {
      return {
        backgroundColor: props.isDarkTheme ? theme.palette.primary.dark : theme.palette.primary.main,
        color: props.isDarkTheme ? 'white' : 'black'
      }
    }
  }
});

//for simpler styling, just pass an object with the css classes as a json object
const useStylesSimple = makeStyles(
  {
    green: {
      color: 'green'
    }
  }
);

const MakeStylesExample = (props) => {
  console.log('props', props);
  const classes = useStyles(props);
  const simpleClasses = useStylesSimple();

  const handleClick = () => {
    console.log("button clicked");
    props.propFunction(" paramter from child");
  }

  return (
    <>
      <div className={classes.root} > Hello World </div>
      {/* <button onClick={handleClick}>click me</button> */}
      {/* <div className={simpleClasses.green}> Should be green </div> */}
    </>
  );
}

export default MakeStylesExample;





