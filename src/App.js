import { createTheme, ThemeProvider } from '@material-ui/core';
import './App.css';
import Home from './components/home.component';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      dark: 'rgb(0,0,0)',
    },
    secondary: {
      // main: '#E26751',
      main: 'rgb(0,0,0)',
    },
    
  },
});

const App = () => {

  return (
    <div className="height100">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
