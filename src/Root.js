import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';
import ReactDOM from 'react-dom';
import registerServiceWorker from './serviceWorker';


const Root = () => (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
);
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

export default Root;