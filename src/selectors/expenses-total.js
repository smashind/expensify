// Get visible expenses
export default (expenses = []) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((sum, value) => sum + value, 0)
  // if (expenses.length === 0) {
  //   return 0;
  // } else {
  //   let expenseArray = [];
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //   expenses.map((expense) => {
  //     expenseArray.push(expense.amount);
  //   });

  //   return expenseArray.reduce(reducer);
  // }
};