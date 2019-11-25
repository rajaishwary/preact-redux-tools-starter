import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "../header";
import { GlobalStyle, AppContainer } from "./styles";
import { Provider } from "react-redux";
import store from "../../store";

import Home from "../../routes/home";
import Profile from "../../routes/profile";

export default class App extends Component {

  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <Provider store={store}>
        <AppContainer>
          <GlobalStyle />
          <Header />
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Profile path="/profile/" user="me" />
            <Profile path="/profile/:user" />
          </Router>
        </AppContainer>
      </Provider>
    );
  }
}
