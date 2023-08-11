// /expenses - displays the list of expenses. We need loader and action for this page

import React from "react";
import ExpenseTable from "../components/expenseTable";
import { useLoaderData } from "react-router-dom";

export default function ExpensesPage() {
  const { budget, expense } = useLoaderData();
  return (
    <section>
      <h2> All Expenses </h2>
      {expense && expense.length > 0 ? (
        <ExpenseTable budget={budget} expense={expense} />
      ) : (
        <p> No expenses to show</p>
      )}
    </section>
  );
}
