import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/">
            <Site />
          </Route>
          <Route path="*">
           <NotFound/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
