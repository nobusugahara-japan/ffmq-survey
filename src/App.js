import React from 'react';
import { Amplify } from 'aws-amplify';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Test3 from './Test3';
import Admin from './Admin';
import './App.css';
// import {withAuthenticator} from "@aws-amplify/ui-react";
// import '@aws-amplify/ui-react/styles.css';


function App() {
  return (
    <BrowserRouter>
      <header className="header">
      <img src={`${process.env.PUBLIC_URL}/image/LayLogo.png`} alt="Logo" className="logo" />
      </header>
      <Switch>
        <Route exact path="/" component={Test3} />
        <Route path="/admin" component={Admin} />
      </Switch>
      <footer className="footer">
        <div className="footer-links">
          <Link to="/" className="footer-link small-text">はじめに戻る</Link>
        </div>
        <span className="copyright">Copyright ©2023 株式会社Lay. All Rights Reserved.</span>
      </footer>
    </BrowserRouter>
  );
}

export default App;


// import Home from "./Home"
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Admin from "./Admin";
// import Test2 from "./Test";
// import Test3 from "./Test3";

// function App() {
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={Test3} />
//         <Route path="/admin" component={Admin} />
//         <Route path="*" component={NotFound}/>
//       </Switch>
//     </BrowserRouter>
//   );
// }

// function NotFound() {
//   return <h2>Not Found Page</h2>;
// }

// export default App;
