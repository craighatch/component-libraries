import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  text: {
    color: 'rgb(255, 255, 255)',
    fontFamily: 'Lato, sans-serif',

  },
  header: {
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: '900'
  },
  title: {
    fontSize: '48px',
    lineHeight: '64px',
  },
  details: {
    fontSize: '20px',
    lineHeight: '32px',
    fontWeight: 'normal'
  }
});

const TabDetails = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className={`${classes.text} ${classes.header}`}>{props.content.header}</div>
      <div className={`${classes.text} ${classes.title}`}>{props.content.title}</div>
      <div className={`${classes.text} ${classes.details}`}>{props.content.details}</div>
    </div>
  );
}

export default TabDetails;