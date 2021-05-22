

import Home from './components/Home'
import FormNew from './components/FormNew'
import FormEdit from './components/FormEdit'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact path="/edit-blog" component={FormEdit}
            />
            <Route exact path="/new-blog" component={FormNew} />
          </Switch>
        </Router>
  );
}

export default App;
