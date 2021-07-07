import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';
import Site from './pages/Site';
import PageError from './components/PageError';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route  path="/">
            <Site />
          </Route>
          <Route path="*">
            <PageError />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
