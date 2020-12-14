import "./App.css";
import HomePage from "./componenets/pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => {
  return <div>HATS</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
