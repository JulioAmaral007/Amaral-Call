import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.ID_CLIENT ?? '',
      clientSecret: process.env.KEY_CLIENT ?? '',
    }),
  ],
}
export default NextAuth(authOptions)
