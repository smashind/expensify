import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal();
  expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toEqual(expenses[0].amount);
});

test('should correctly add multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  const expensesTotal = expenses[0].amount + expenses[1].amount + expenses[2].amount;
  expect(result).toEqual(expensesTotal);
});