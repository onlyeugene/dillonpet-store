
import { authOptions } from "@/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);


// Export as GET and POST handlers
export { handler as GET, handler as POST };