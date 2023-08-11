import { useEffect, useRef } from "react";
import { useFetcher } from "react-router-dom";

export default function AddBudgetForm() {
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
        <h2> Create budget </h2>
      </header>

      <fetcher.Form method="post" ref={formRef}>
        <div className="form-div">
          <label htmlFor="newBudget">Budget Name</label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            placeholder="Groceries"
            required
            ref={inputRef}
          />
        </div>
        <div className="form-div">
          <label htmlFor="budgetAmount">Amount</label>
          <input
            type="number"
            name="budgetAmount"
            id="budgetAmount"
            placeholder="$200"
            required
          />
        </div>
        <button id="form-btn" type="submit" disabled={isSubmitting}>
          {" "}
          Create Budget{" "}
        </button>

        <input type="hidden" name="_action" value="createBudget" />
      </fetcher.Form>
    </section>
  );
}
