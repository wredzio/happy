
import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AppProps } from './App';


const render = async (
  root: any,
  props: AppProps,
  container = document.getElementById('root')
) => {
  ReactDOM.render(
    React.createElement(root, props),
    container
  );
};


render(App, {
  dots: [['purple', 'pink', 'purple', 'pink', 'purple', 'pink', 'purple', 'pink', 'purple'],
  ['yellow', 'orange', 'yellow', 'orange', 'yellow', 'orange', 'yellow', 'orange', 'yellow']]
} as AppProps);


