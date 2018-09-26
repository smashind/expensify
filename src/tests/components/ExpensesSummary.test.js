import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={100} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={300} />);
  expect(wrapper).toMatchSnapshot();
});