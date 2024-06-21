import { connectToDB } from "@utils/database";
import NextAuth, { DefaultSession, NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import Admin from "@models/Admin";
import { JWT } from "next-auth/jwt";

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
    await connectToDB();
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

const authOptions: NextAuthOptions = {
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
          return user;
        } catch (error) {
          throw new Error("Failed to login");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT, user?: User }) {
      if (user) {
        token.email = user.email;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: DefaultSession, token: JWT }) {
      if (token && session.user) {
        session.user.email = token.email;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
