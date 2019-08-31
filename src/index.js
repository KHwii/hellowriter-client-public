import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from 'client/Root'

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();