import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense) => {
        props.onSubmit(expense);
        props.history.push('/');
      }}
    />
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (expense) => dispatch(startAddExpense(expense))
  };
};

export default connect(undefined, mapDispatchToProps)(AddExpensePage);