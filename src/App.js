import "./App.css";
import React from "react";
import HomePage from "./componenets/pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./componenets/pages/shop/ShopPage";
import Header from "./componenets/header/Header";
import Signup from "./componenets/pages/sign-up-in/Sign-up-in";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  //when component mounts, set currentUser = to the user
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //store the current user session in app
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({
          currentUser: userAuth, //userAuth is null anywyays
        });

        console.log(this.state)
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;
