import React from "react";
import ExpenseItem from "./expenseItem";

export default function ExpenseTable({ expense, showBudget = true }) {
  return (
    <div className="mx-auto my-3 px-7">
      {expense.length > 6 ? (
        <h1 className="text-4xl font-bold mx-5 my-3 ">
          Recent expenses : {expense.length}{" "}
        </h1>
      ) : null}
      <table>
        <thead>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", " "].map(
              (i, index) => (
                <th key={index}> {i} </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {expense
            .sort((a, b) => b.createdAt - a.createdAt)
            .map((item) => (
              <tr key={item.id}>
                <ExpenseItem expense={item} showBudget={showBudget} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
