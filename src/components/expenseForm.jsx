import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";
import { HiMiniPlus } from "react-icons/hi2";

function ExpenseForm({ budget }) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      inputRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <section className="form-section">
      <header>
        <h2>
          Add new{" "}
          <span id="highlight">
            {" "}
            {budget.length === 1 && `${budget.map((budget) => budget.name)}`}
          </span>{" "}
          Expense
        </h2>
      </header>

      <fetcher.Form method="post" ref={formRef}>
        <div className="form-div">
          <label htmlFor="newExpense">Expense Name</label>
          <input
            type="text"
            name="newExpense"
            id="newExpense"
            placeholder="Restaurant"
            required
            ref={inputRef}
          />
        </div>
        <div className="form-div">
          <label htmlFor="expenseAmount">Amount</label>
          <input
            type="number"
            name="expenseAmount"
            id="expenseAmount"
            placeholder="$50"
            required
          />
        </div>
        <div className={budget.length === 1 ? "form-div hidden" : "form-div"}>
          <label htmlFor="expenseCategory "> Budget category </label>
          <select name="expenseCategory" id="expenseCategory" required>
            {budget
              .sort((a, b) => a.createdAt - b.createdAt)
              // (a, b) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0) // ordering alphabets
              .map((budget) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
          </select>
        </div>

        <button
          id="form-btn"
          type="submit"
          disabled={isSubmitting}
          className="flex flex-row gap-3 items-center"
        >
          Add expense
          <div className=" bg-white rounded-3xl p-0.5">
            <HiMiniPlus className="text-black " />{" "}
          </div>
        </button>

        <input type="hidden" name="_action" value="createExpense" />
      </fetcher.Form>
    </section>
  );
}

export default ExpenseForm;
