import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import 'tachyons';
// import { robots } from './robots'; // Because we are using exports, not exports default, for those doesn't have multiple default, we have to destructue if we want more than one, or break into parts.  


ReactDOM.render(
    <App />, document.getElementById('root'));