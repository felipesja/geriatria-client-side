import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import {Provider} from 'react-redux';
import {store} from './modules';

fontawesome.library.add(brands, solid, regular)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();