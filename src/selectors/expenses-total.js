const getTotalExpenses = (expenses) => {
  return expenses.reduce((accumulator, { amount }) => {
    return accumulator + amount;
  }, 0);
};

export default getTotalExpenses;