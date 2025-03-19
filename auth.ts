import NextAuth, { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { LOGIN_USER } from "./services/api";
import axios from "axios";

declare module "next-auth" {
  interface User {
    user: {
      accessToken: string;
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      role: string;
      phoneNumber: string;
    };
  }

  // Override the Session interface completely instead of extending it
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      role: string;
      accessToken: string;
    };
  }
}

export const authOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const url = `${process.env.NEXT_PUBLIC_DILLONPET_BASE_URL}${LOGIN_USER}`;
          const { data } = await axios.post(url, credentials, {
            headers: { "Content-Type": "application/json" },
          });

          if (data?.user) {
            return {
              user: {
                id: data.user.id,
                firstName: data.user.firstName,
                lastName: data.user.lastName,
                email: data.user.email,
                role: data.user.role,
                phoneNumber: data.user.phoneNumber,
                accessToken: data.accessToken,
              },
            };
          }

          return null;
        } catch (error) {
          if (axios.isAxiosError(error)) {
            throw new Error(error.message);
          }

          throw new Error("Authentication failed");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user.user; // Ensure user structure is correct
      }
      return token;
    },

    // async session({ session, token }) {
    //   // Initialize session.user as an empty object if it doesn't exist
    //   // session.user = session.user || {};

    //   if (token.user) {
    //     // Now we can safely assign properties to session.user
    //     session.user.id = token.user.id;
    //     session.user.firstName = token.user.firstName;
    //     session.user.lastName = token.user.lastName;
    //     session.user.email = token.user.email;
    //     session.user.phoneNumber = token.user.phoneNumber;
    //     session.user.role = token.user.role;
    //     session.user.accessToken = token.user.accessToken;
    //   }
    //   return session;
    // },
  },

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

// ✅ Correctly export the auth handler
export const { auth, handlers } = NextAuth(authOptions);
