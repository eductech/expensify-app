import selectExpenses from "../../selectors/expenses";
import { expenses } from "../fixtures/expenses";

test('should filter by test value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1]]);
});