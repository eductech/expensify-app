import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should setup edit expense action object', () => {
  const action = editExpense('123', {
    description: 'this is my new phone'
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      description: 'this is my new phone'
    }
  });
});