import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { auth } from "../../../firebase/config";  // (If using Firebase for authentication)

export const handler = NextAuth({
  providers: [
    // Email/Password provider (You can replace it with OAuth provider like Google, GitHub, etc.)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await signInWithEmailAndPassword(auth, credentials?.email || '', credentials?.password || '');
        if (user) {
          return { email: user.user.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin", // Custom Sign-In Page (optional)
  },
  session: {
    strategy: "jwt", // You can choose "database" if you want to persist sessions in DB
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.email = token.email;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
