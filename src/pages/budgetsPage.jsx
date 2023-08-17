import React from "react";
import { useParams } from "react-router-dom";

export default function BudgetsPage() {
  const { id } = useParams();

  return <div>Budget page : {id}</div>;
}
