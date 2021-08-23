
import { makeStyles } from "@material-ui/core";


//makeStyles accepts the theme object of our app and returns a function to which we can pass our component props
const useStyles = makeStyles((theme) => {
  return {
    root: (props) => {
      return {
        backgroundColor: props.isDarkTheme ? theme.palette.primary.dark : theme.palette.primary.main
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
  const classes = useStyles(props);
  const simpleClasses = useStylesSimple();
  return (
    <>
      <div className={classes.root}> Hello World </div>
      <div className={simpleClasses.green}> Should be green </div>
    </>
  );
}

export default MakeStylesExample;





