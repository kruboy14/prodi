import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Loader from './components/Loader';
import ScrollToTop from './routes/ScrollToTop';

const Site = React.lazy(() => import('./pages/Site'))
const PageError = React.lazy(() => import('./components/PageError'))
const Admin = React.lazy(() => import('./pages/Admin'))
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
          <React.Suspense fallback={<Loader/>}>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>

          <Route path="/">
            <Site />
          </Route>

          <Route path="*">
            <PageError />
          </Route>
        </Switch>
          </React.Suspense>

      </BrowserRouter>
    </div>
  );
}

export default App;
