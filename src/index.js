import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './index.css';
import redirect from './utils/redirect';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter basename="/my_reads">
        <App />
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
