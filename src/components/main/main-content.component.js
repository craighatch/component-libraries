import { Tabs, Tab, makeStyles } from "@material-ui/core";
import { useState } from "react";

const tabContent = [
  {
    tabLabel: 'DIVERSITY',
    header: 'News',
    title: 'Credera Names Nickoria Johnson Chief Diversity Officer',
    details: 'Johnson will be responsible for accelerating the mission of amplifying voices of underrepresented groups and synergizing diversity, equity, and inclusion (DE&I) efforts toward unified goals to ensure accessibility, focus, and visibility of DE&I.'
  },
  {
    tabLabel: 'CULTURE',
    header: 'News',
    title: 'Credera Named One of the 2021 Best Workplaces for Millennials',
    details: 'We’re honored to announce Credera’s recognition as one of the 2021 Best Workplaces for Millennials by Great Place to Work and Fortune. If you’re seeking to take the next step in your professional journey, check out our open opportunities.'
  },
  {
    tabLabel: 'INNOVATION',
    header: 'Insight',
    title: '5 Ways to Kill Projects & Fuel Innovation',
    details: 'In this document, two Credera innovation experts unpack the need for deprioritization, five tactics to leverage when killing off projects, and how to fuel innovation through successful prioritization.'
  },
  {
    tabLabel: 'IMPACT',
    header: 'News',
    title: 'Credera Service Day 2021: Making an Extraordinary Impact in Our Communities',
    details: 'Every year, Credera holds a company-wide Service Day to give Credera employees an opportunity to live out our mission to make an extraordinary impact on our communities together. Learn more about our 2021 Service day impact.'
  }
]

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  tabContent: {
    flexGrow: 1,
    width: '75%',
    padding: '36px',
    marginTop: '50px'
  },
  tabs: {
    minHeight: '75px'
  }
});

const MainContent = (props) => {

  const classes = useStyles(props);

  const [activeIndexTab, setActiveIndexTab] = useState(0);



  const handleChange = (event, newValue) => {
    // debugger;
    setActiveIndexTab(newValue);
  };

  const temp = () => {
    setActiveIndexTab(1);
  }

  console.log('activeIndexTab', activeIndexTab);
  return (
    <div className={classes.root}>
      {false  &&  (<button onClick={temp}> click me</button>)}

      <div className={classes.tabContent}>
        {activeIndexTab === 0 &&
          (<div>
            <div>{tabContent[0].header}</div>
            <div>{tabContent[0].title}</div>
            <div>{tabContent[0].details}</div>
          </div>)
        }
        {activeIndexTab === 1 &&
          (<div>
            <div>{tabContent[1].header}</div>
            <div>{tabContent[1].title}</div>
            <div>{tabContent[1].details}</div>
          </div>)
        }
        {activeIndexTab === 2 &&
          (<div>
            <div>{tabContent[2].header}</div>
            <div>{tabContent[2].title}</div>
            <div>{tabContent[2].details}</div>
          </div>)
        }
        {activeIndexTab === 3 &&
          (<div>
            <div>{tabContent[3].header}</div>
            <div>{tabContent[3].title}</div>
            <div>{tabContent[3].details}</div>
          </div>)
        }
      </div>
      <div className={classes.tabs}>

        <Tabs value={activeIndexTab} onChange={handleChange} color='primary'>
          {tabContent.map(content => (
            <Tab key={content.tabLabel} label={content.tabLabel} />
          ))
          }
        </Tabs>
      </div>
    </div>
  );
}

export default MainContent;