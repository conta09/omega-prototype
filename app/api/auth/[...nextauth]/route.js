// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login', // Your sign-in page path
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        await connectMongoDB();

        const { email, password } = credentials;
        const user = await User.findOne({ email });

        if (!user) {
          throw new Error('No user found with this email');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          throw new Error('Incorrect password');
        }

        return {
          id: user._id.toString(),
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
