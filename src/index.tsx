import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App dots={[['purple', 'pink', 'purple', 'pink', 'purple', 'pink', 'purple', 'pink', 'purple'], 
['yellow', 'orange', 'yellow', 'orange', 'yellow', 'orange', 'yellow', 'orange', 'yellow']]} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
