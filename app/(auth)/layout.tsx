import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

// check if the user is authenticated 
const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  if (isUserAuthenticated) redirect("/");

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;