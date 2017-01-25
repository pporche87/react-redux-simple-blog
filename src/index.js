import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// remove import App. 

// import Router and browserHistory. Cares only about the change that hapens after the path URL 
// there are two alternatives, memoryHistory(doesn't care about URL), and hashHistory [URL]#...
import { Router, browserHistory  } from "react-router";
import reducers from './reducers';

// feed mapping into router 
import routes from "./routes";
import promise from "redux-promise";

// apply promise to the middleware 
const createStoreWithMiddleware = applyMiddleware(
  promise   
)(createStore);

// replace <App /> with <Router history={browserHistory} /> 
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
