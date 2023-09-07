import React from "react";
import { useLoaderData } from "react-router-dom";
import BudgetItem from "../components/budgetItem";
import ExpenseForm from "../components/expenseForm";
import ExpenseTable from "../components/expenseTable";

export default function BudgetsPage() {
  const { budget, expenses } = useLoaderData();
  console.log(expenses);

  return (
    <main className="w-full px-5 py-3  ">
      <h1 className="font-bold text-3xl pb-5">
        <span className="text-purple-500">{budget.name}</span> Overview
      </h1>
      <div className=" lg:flex lg:flex-row gap-5 justify-around">
        <BudgetItem budget={budget} action="Delete Budget" />
        {/* since we sort the budget, send it as array */}
        <ExpenseForm budget={[budget]} />
      </div>

      {/* recent expenses */}

      {expenses && expenses.length > 0 && (
        <>
          <h1>Recent expenses </h1>

          <ExpenseTable expense={expenses} showBudget={false} />
        </>
      )}
    </main>
  );
}
