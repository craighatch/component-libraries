import Header from "./header/header.component";
import MainContent from "./main/main-content.component";


const Home = (props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        {/* <MainContent /> */}
        <div>main content area</div>
      </div>
      <div>footer</div>
    </div>
  );
}

export default Home;



