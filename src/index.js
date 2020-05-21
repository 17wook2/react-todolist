import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const ExportedApp = process.env.NODE_ENV === 'development'
  ? hot(App) // error is thrown by `hot`
  : App;

ReactDOM.render(<ExportedApp />, document.querySelector('#root'));
