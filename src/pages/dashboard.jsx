import React from "react";
import AddBudgetForm from "../components/budgetForm";
import ExpenseForm from "../components/expenseForm";
import Intro from "../components/intro";
import { useLoaderData } from "react-router-dom";
import BudgetItem from "../components/budgetItem";

export default function Dashboard() {
  const { userName, budget } = useLoaderData();

  return (
    <main>
      {userName ? (
        <div>
          <header>
            <h1 className="text-5xl font-bold mx-5 my-5 text-left">
              Welcome back,{" "}
              <span className="text-orange-500 "> {userName} </span>
            </h1>
          </header>

          {/* BUDGET & EXPENSE FORM DIV */}

          {/* BUDGET FORM  */}
          {budget && budget.length > 0 ? (
            <>
              {" "}
              <div className="flex flex-col md:flex-row md:justify-center">
                <AddBudgetForm />
                <ExpenseForm budget={budget} />
              </div>
              {/* EXISTING BUDGET */}
              <section className="md:flex flex-col mx-auto ">
                <h1 className="text-3xl font-bold  px-8 pb-7 md:text-5xl md:text-left">
                  {" "}
                  Existing Budgets{" "}
                </h1>
                <div className="md:grid md:grid-cols-2 xl:grid-cols-3">
                  {budget.map((bud) => (
                    // Assigning the whole object to budget and destructure it in budget item
                    <BudgetItem key={bud.id} budget={bud} />
                  ))}
                </div>
              </section>
            </>
          ) : (
            <article className="flex flex-col justify-start mx-5 my-3 ">
              <header>
                <h4>Personal budgeting is the secret to financial freedom.</h4>
                <h4>Create a budget to get started!</h4>
              </header>
              <AddBudgetForm />
            </article>
          )}
        </div>
      ) : (
        <Intro />
      )}
    </main>
  );
}
