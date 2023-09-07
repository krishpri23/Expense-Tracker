// b budgets section

import { Form, Link } from "react-router-dom";
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../utils/helper";

import { HiOutlineBanknotes, HiTrash } from "react-icons/hi2";

export default function BudgetItem({ budget, showDelete }) {
  const { id, name, amount } = budget;

  const amountSpent = calculateSpentByBudget(id);
  const remainingAmount = amount - amountSpent;

  return (
    <div className="existing-budgets ">
      {/* title  */}
      <div className="flex gap-5 justify-between p-3 ">
        <h2 className="p-0">{name}</h2>
        <h3>{formatCurrency(amount)} Budgeted</h3>
      </div>
      {/* progress indicator */}
      <progress
        className="[&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-violet-400 [&::-moz-progress-bar]:bg-violet-400 w-full px-2"
        max={amount}
        value={amountSpent}
      >
        {" "}
        {formatPercentage(amountSpent / remainingAmount)}{" "}
      </progress>
      {/* amount spent & remaining */}
      <div className="flex justify-between p-3">
        <p> {formatCurrency(amountSpent)}spent</p>
        <p className="text-gray-400">
          {formatCurrency(remainingAmount)} remaining{" "}
        </p>
      </div>
      {showDelete ? (
        <div>
          <Form
            method="post"
            action="delete"
            onSubmit={(event) => {
              if (!confirm("Delete budget?")) {
                event.preventDefault();
              }
            }}
          >
            <button
              id="form-btn"
              className="flex flex-row gap-3 items-center"
              type="submit"
            >
              {" "}
              <HiTrash />
              Delete Budget
            </button>
          </Form>
        </div>
      ) : (
        <div className="px-2 py-3">
          <Link
            id="form-btn"
            className="flex flex-row gap-4 items-center w-2/6"
            to={`/budget/${id}`}
          >
            <HiOutlineBanknotes className="text-white font-extrabold" />
            View Details{" "}
          </Link>
        </div>
      )}
    </div>
  );
}
