import Admin from "@models/Admin.ts";
import { connectToDB } from "@utils/database";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

async function login(credentials) {
  console.log("credentials: ", credentials);
  try {
    connectToDB();
    const user = await Admin.findOne({ email: credentials.email });

    if (!user) throw new Error("Wrong credentials");
    const isCorrect = await bcrypt.compare(credentials.password, user.password);
    if (!isCorrect) throw new Error("Wrong credentials");
    return user;
  } catch (error) {
    throw new Error("Something went wrong");
  }
}

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        console.log("credentials: ", credentials);
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          throw new Error("Failed to login");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email;
        session.user.id = token.id;
      }
      return session;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
