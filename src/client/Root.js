import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';
import './Root.css';

const Root = () => (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);

export default Root;