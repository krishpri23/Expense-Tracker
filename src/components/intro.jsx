import { Form } from "react-router-dom";

export default function Intro() {
  return (
    <main>
      <div className="container flex flex-col items-start my-5  mx-auto">
        <h1 className="text-5xl font-bold mx-5">
          Take Control of <span className="text-cyan-700 ">Your Money</span>
        </h1>
        <p className="text-xl mx-5 my-2">
          {" "}
          Personal budgeting is the secret to financial independence.
        </p>
        <Form className="flex flex-col items-start " method="post">
          <input
            className="mx-5 mb-3"
            type="text"
            name="userName"
            id="userName"
            placeholder="What's your name?"
            required
          />
          <button className="mx-5 mb-2" id="form-btn" type="submit">
            Create Account
          </button>
          <input type="hidden" name="_action" value="newUser" />
        </Form>
      </div>
      <img
        src="investment.svg"
        alt="person with chart"
        aria-label="Investment"
      />
    </main>
  );
}
