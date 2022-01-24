import React  from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './providers/ThemeProvider';
import LocalesProvider from './providers/LocalesProvider';
import Header from './components/Header';
import AppRouter from './router/AppRouter';
import store from './store';



const App = () => {
  return (
   
    <Provider store={store}>
      <ThemeProvider>
        <LocalesProvider>
          <Router>
            <Header />
            <AppRouter />
          </Router>
        </LocalesProvider>
      </ThemeProvider>
    </Provider>
   
  );
};

export default App;
