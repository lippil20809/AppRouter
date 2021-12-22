import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import AppRouter from "./router/AppRouter";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <AppRouter />
      </Router>
    );
  }
}

export default App;
