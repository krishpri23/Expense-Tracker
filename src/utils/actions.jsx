//  helper functions
import {
  createBudget,
  fetchData,
  setItem,
  deleteItem,
  createExpense,
  deleteExpense,
  getAllMatchingItems,
} from "./helper";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export async function dashboardAction({ request }) {
  const data = await request.formData();

  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      setItem({ key: "userName", value: JSON.stringify(values.userName) });
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("Problem creating account");
    }
  }
  if (_action === "createBudget") {
    try {
      createBudget({ name: values.newBudget, amount: values.budgetAmount });
      return toast.success("Budget is created");
    } catch (e) {
      throw new Error("Problem creating the budget");
    }
  }

  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.expenseAmount,
        budgetId: values.expenseCategory,
      });
      return toast.success("expense created ");
    } catch (e) {
      throw new Error("Problem creating expense");
    }
  }

  if (_action === "deleteExpense") {
    try {
      deleteExpense({
        key: "expense",
        id: values.expenseId, // got from input hidden expense.Id
      });

      return toast.success("Expense deleted");
    } catch (e) {
      throw new Error("Problem deleting expense");
    }
  }
}

export async function logoutAction() {
  // delete the user
  deleteItem({ key: "userName" });
  deleteItem({ key: "budget" });
  deleteItem({ key: "expense" });
  //redirect
  toast.success("You are logging out!");
  return redirect("/");
}

//expense form
export async function expenseAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      //delete item
      deleteExpense({
        key: "expense",
        id: values.expenseId, // got from input hidden expense.Id
      });

      return toast.success("Expense deleted");
    } catch (e) {
      throw new Error("Problem deleting expense");
    }
  }
}

// budget page action
export async function budgetAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      //delete item
      deleteExpense({
        key: "expense",
        id: values.expenseId, // got from input hidden expense.Id
      });

      return toast.success("Expense deleted");
    } catch (e) {
      throw new Error("There was a problem deleting expense");
    }
  }
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.expenseAmount,
        budgetId: values.expenseCategory,
      });
      return toast.success("expense created ");
    } catch (e) {
      throw new Error("Problem creating expense");
    }
  }
}

// delete budget inside view details page
export async function deleteBudget({ params }) {
  console.log(params.id);
  try {
    deleteItem({
      key: "budget",
      id: params.id,
    });

    //expense connected to this budget
    const associatedExpenses = getAllMatchingItems({
      category: "expense",
      key: "budgetId",
      value: params.id,
    });

    associatedExpenses.forEach((expense) => {
      console.log(expense.id);
      deleteItem({
        key: "expense",
        id: expense.id,
      });
    });

    toast.success("Budget deleted! ");
  } catch (error) {
    throw new Error("There was a problem deleting your budget");
  }

  return redirect("/");
}

export function dashboardLoader() {
  const userName = fetchData("userName");
  const budget = fetchData("budget");
  const expense = fetchData("expense");

  return { userName, budget, expense };
}

export async function expenseLoader() {
  const expense = fetchData("expense");
  return { expense };
}

export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: "budget",
    key: "id",
    value: params.id, //grab the name from the route param added in app.jsx
  })[0];

  // to load expenses on budget page
  const expenses = await getAllMatchingItems({
    category: "expense",
    key: "budgetId",
    value: params.id, //grab the name from the route param added in app.jsx
  }); // need all of the expenses in the expense array

  if (!budget) {
    throw new Error("Budget you are trying to find not exists");
  }

  return { budget, expenses };
}
