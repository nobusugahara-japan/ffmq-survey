import Home from "./Home"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from "./Admin"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
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
