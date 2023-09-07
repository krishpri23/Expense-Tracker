// local storage

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

//delete item

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};

//set item
export const setItem = ({ key, value }) => {
  localStorage.setItem(key, value);
};

//create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    amount: Number(amount),
    createdAt: Date.now(),
  };

  const existingBudgets = fetchData("budget") ?? [];
  return localStorage.setItem(
    "budget",
    JSON.stringify([...existingBudgets, newItem])
  );
};

//create expense

export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    budgetId: budgetId,
    createdAt: Date.now(),
  };

  const existingExpense = fetchData("expense") ?? [];
  return localStorage.setItem(
    "expense",
    JSON.stringify([...existingExpense, newItem])
  );
};

// total spent by budget

export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expense") ?? [];

  const spendAmount = expenses.reduce((acc, expense) => {
    //expense budget id === budget id I pass
    if (expense.budgetId !== budgetId) return acc;

    return (acc += expense.amount);
  }, 0);

  return spendAmount;
};

// format currency
export const formatCurrency = (amount) => {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

// format percentage for progress bar

export const formatPercentage = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

//format date
export const formatDate = (date) => new Date(date).toLocaleDateString();

//getMatchingItems - budget overview

export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
};

// delete expense item from recent expense
export const deleteExpense = ({ key, id }) => {
  const existingData = fetchData(key);
  if (id) {
    // expenseId, as long as the id does not match keep it in the array
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};
