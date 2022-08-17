import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './index.css';
import ReactGA from 'react-ga';

fontawesome.library.add(brands, solid, regular)

ReactDOM.render(<App />, document.getElementById('root'));

ReactGA.initialize('UA-146556270-1');
ReactGA.pageview(window.location.pathname + window.location.search);

registerServiceWorker();