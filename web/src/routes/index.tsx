import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManagerRoutes } from "./ManagerRoutes";

import { Loading } from "../components/Loading";
import { useState } from "react";

export function Routes() {
  const [isLoading] = useState(true);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <AuthRoutes />
      {/* <EmployeeRoutes /> */}
      {/* <ManagerRoutes /> */}
    </BrowserRouter>
  )
}