import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

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

// testing database
import './firebase/firebase';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense({description: 'Rent', amount: 109500 }));
store.dispatch(addExpense({description: 'Gaz Bill', createdAt: 1000}));

const state = store.getState();
const visibleState = getVisibleExpenses(state.expenses, state.filters); 
console.log(visibleState);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
