import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const newExpense = {
    description: 'Food',
    note: 'Food stuffs',
    amount: 300,
    createdAt: 3000
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense: newExpense
  };

  const state = expensesReducer(expenses, action);
  expect(state).toHaveLength(4);
  expect(state).toContain(newExpense)
  expect(state).toEqual([...expenses, newExpense])
});

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: { amount: 2000 }
  };

  const state = expensesReducer(expenses, action);
  expect(state[2].amount).toEqual(2000);
});

test('should not edit an expense if not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: { amount: 2000 }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});