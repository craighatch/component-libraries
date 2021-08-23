

const TabDetails = (props) => {

// props: header, title, details

  return (
    <div>
      <div>{props.header}</div>
      <div>{props.title}</div>
      <div>{props.details}</div>
    </div>
  );
}

export default TabDetails;