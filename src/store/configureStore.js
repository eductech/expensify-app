import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// store creation
const configureStore = () => createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

export default configureStore;

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

