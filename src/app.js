import React from 'react';
import ReactDOM from 'react-dom';

//routes
import AppRouter from './routers/AppRouter';

//styles
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 

ReactDOM.render(<AppRouter />, document.getElementById('app'));
