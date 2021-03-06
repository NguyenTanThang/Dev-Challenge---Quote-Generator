import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./pages/Home";
import AuthorDetails from "./pages/AuthorDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/authors/:authorName" component={AuthorDetails}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
