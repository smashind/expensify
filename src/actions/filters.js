// SET_TEXT_FILTER
export const setTextFilter = (filterText = '') => ({
  type: 'SET_TEXT_FILTER',
  filterText
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SET_START_DATE
export const setStartDate = (start) => ({
  type: 'SET_START_DATE',
  start
});

// SET_END_DATE
export const setEndDate = (end) => ({
  type: 'SET_END_DATE',
  end
});