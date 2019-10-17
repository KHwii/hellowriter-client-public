<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
=======
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./client/Root";
import * as serviceWorker from "./serviceWorker";

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
>>>>>>> dev
