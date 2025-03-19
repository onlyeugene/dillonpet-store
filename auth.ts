import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import instance from "./services/axios-instance";
import { LOGIN_USER } from "./services/api";


// Extend the default NextAuth types
declare module "next-auth" {
  interface User {
    accessToken: string; // Add the accessToken property
  }

  interface Session {
    user: User; // Ensure session contains the extended User type
  }
}


export const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        try {
          const { data } = await instance.post(LOGIN_USER, credentials);

          if (!data || !data.accessToken) {
            throw new Error("Invalid credentials");
          }

          return data; // API response should contain user details & accessToken
        } catch (error: unknown) {
          throw new Error(error instanceof Error ? error.message : "Login failed");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken; // Attach accessToken
      }
      return token;
    },
    async session({ session, token }) {
      if (typeof token.accessToken === 'string') {
        session.user.accessToken = token.accessToken; // Attach accessToken
      }
      return session;
    },
  },

  session: { strategy: "jwt" }, // ✅ Correct way to set JWT-based sessions
  secret: process.env.NEXTAUTH_SECRET,
};

// ✅ Correctly export the auth handler
export const { auth, handlers } = NextAuth(authOptions);
