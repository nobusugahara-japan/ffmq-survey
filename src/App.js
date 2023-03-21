import Home from "./Home"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from "./Admin";
import Test2 from "./Test";
import Test3 from "./Test3";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Test3} />
        <Route path="/admin" component={Admin} />
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

function NotFound() {
  return <h2>Not Found Page</h2>;
}

export default App;
