import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

  import Nav from './Nav.js'
  
  import Home from './pages/Home'
  import Visualize from './pages/Visualize'
  import Configure from './pages/Configure'
  
  export default function AppRouter() {
    return (
      <Router>
        <div>
          <Nav />
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/configure">
              <Configure />
            </Route>
            <Route path="/visualize">
              <Visualize />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }