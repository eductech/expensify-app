import { expenses } from "../fixtures/expenses";
import getTotalExpenses from "../../selectors/expenses-total";

test('should return expenses sum', () => {
  const totalAmount = getTotalExpenses(expenses);
  expect(totalAmount).toBe(750);
});

test('should return expense sum (400)', () => {
  const totalAmount = getTotalExpenses([expenses[0]]);
  expect(totalAmount).toBe(400);
});

test('should return 0 because there is no expenses', () => {
  const totalAmount = getTotalExpenses([]);
  expect(totalAmount).toBe(0);
});