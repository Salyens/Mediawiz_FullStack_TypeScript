import { connectToDB } from "@utils/database";
import NextAuth, { DefaultSession } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import Admin from "@models/Admin";

interface ICredentials {
  email: string;
  password: string;
  redirect: string;
  csrfToken: string;
  callbackUrl: string;
  json: string;
}

async function login(credentials: ICredentials) {
  try {
    connectToDB();
    const email = credentials.email.toLowerCase();

    const user = await Admin.findOne({ email });
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
        if (!credentials) return null;
        try {
          const user = await login(credentials as ICredentials);
          console.log("user: ", user);
          return user;
        } catch (error) {
          throw new Error("Failed to login");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.email = user.email;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
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
