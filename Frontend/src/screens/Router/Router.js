import React from 'react';
import {
  Router, Route, IndexRoute, hashHistory
} from 'react-router';
import App from '../../App';
import Buy from '../Payment/Buy';

class Routes extends React.Component {
  render() {
    // console.log('routesMenu', this.props);
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          {/* <IndexRoute component={App} /> */}
          <Route path="/buy" name="buy" component={Buy} />
        </Route>
      </Router>
    );
  }
}

export default Routes;
