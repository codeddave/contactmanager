import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contacts from "./components/contact/Contacts";

import AddContact from "./components/contact/AddContact";
import EditContact from "./components/contact/EditContact";
import Header from "./components/layout/Header";
import About from "./components/Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "./context";

import NotFound from "./components/Pages/NotFound";
import Test from "./components/Test/Test";

class App extends Component {
  componentDidMount() {
    console.log("compoonent actualy di mount. youre absolutely good to go ");
  }

  render() {
    return (
      <Provider>
        <Router basename={`${process.env.PUBLIC_URL}/`}>
          <div className="App">
            <Header branding="Contact Manager" />

            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />

                <Route exact path="/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />

                <Route exact path="/about" component={About} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
