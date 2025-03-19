import axios from "axios";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LOGIN_USER } from "./services/api";
import { useLoginSchema } from "./schema/user-schema"; // Adjusted import

declare module "next-auth" {
  interface User {
    // id: string;
    firstName: string;
    lastName: string;
    // email: string;
  }

  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const url = `${process.env.NEXT_PUBLIC_DILLONPET_BASE_URL}${LOGIN_USER}`;

          // Validate credentials with schema
          const { email, password } = await useLoginSchema.parseAsync(credentials);

          // Make API call
          const response = await axios.post(url, {
            email,
            password,
          });

          // Check if we got valid user data
          const user = response.data;
          console.log(user);

          if (!user || !user.data) {
            // Adjust based on your API response structure
            throw new Error("Invalid Credentials");
          }

          // Return user object - make sure it has id, name, email etc. as needed
          return user.data; // Adjust based on your API response structure
        } catch (error) {
          console.error("Authentication error:", error);
          return null; // NextAuth expects null on failure
        }
      },
    }),
  ],
  callbacks: {
    // JWT callback: Updates the token with user data
    async jwt({ token, user }) {
      // `user` is available during initial sign-in
      if (user) {
        token.id = user.id; // Assuming your API returns an id
        token.firstName = user.firstName; // Add firstName
        token.lastName = user.lastName; // Add lastName
        token.email = user.email; // Add email
        // Add any other fields your API returns in user.data
      }
      return token;
    },

    // Session callback: Updates the session with data from the token
    async session({ session, token }) {
      // Attach token data to the session
      session.user.id = token.id as string;
      session.user.firstName = token.firstName as string;
      session.user.lastName = token.lastName as string;
      session.user.email = token.email as string;

      return session;
    },
  },
  // Optional: Configure session settings
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  pages: {
    signIn: "/login", // Custom sign-in page (adjust as needed)
  },
});