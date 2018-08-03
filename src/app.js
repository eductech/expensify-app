import React from 'react';
import ReactDOM from 'react-dom';

//routes
import AppRouter from './routers/AppRouter';

//redux
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

//styles
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 

const store = configureStore();

store.dispatch(addExpense({desctiption: 'Water Bill'}));
store.dispatch(addExpense({desctiption: 'Gaz Bill'}));
store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleState = getVisibleExpenses(state.expenses, state.filters); 
console.log(visibleState);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
