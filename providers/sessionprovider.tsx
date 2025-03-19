"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
  session: Session | null;
}

const AuthProvider = ({ children, session }: PropsType) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
