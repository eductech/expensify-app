

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 30000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Caffee', amount: 300, createdAt: 100000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
