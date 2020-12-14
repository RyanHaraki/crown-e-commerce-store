import "./App.css";
import HomePage from "./componenets/pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./componenets/pages/shop/ShopPage";
import Header from './componenets/header/Header'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
