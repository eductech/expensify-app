import React from "react";
import { connect } from "react-redux";
import numeral from 'numeral';
import getTotalExpenses from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseSummary = ({visibleExpenses, totalExpenses}) => {
  const expensesWord = visibleExpenses === 1 ? 'expense' : 'expenses';
  const formatedTotalExpenses = numeral(totalExpenses).format('$0,0.00');

  return (
    <div>
      <h1>Viewing {visibleExpenses} {expensesWord} totalling {formatedTotalExpenses}</h1>
    </div>
  )
};

const mapStateToProps = (state) => {
  const selectedExpenses = getVisibleExpenses(state.expenses, state.filters);
  
  return {
    visibleExpenses: selectedExpenses.length,
    totalExpenses: getTotalExpenses(selectedExpenses) / 100
  }
};

export default connect(mapStateToProps)(ExpenseSummary);