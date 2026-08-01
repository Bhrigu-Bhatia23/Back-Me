import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import User from "@/models/user";
import connectDB from "@/db/connectDB";

const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectDB();

        const currentUser = await User.findOne({
          email: user.email,
        });

        if (!currentUser) {
          await User.create({
            email: user.email,
            username: user.email.split("@")[0],
            name: user.name,
            profilepic: user.image,
          });
        }
      }

      return true;
    },

    async session({ session }) {
  await connectDB();

  const dbUser = await User.findOne({
    email: session.user.email,
  });

  if (dbUser) {
    session.user.username = dbUser.username;
  }

  return session;
}
  },
});

export { handler as GET, handler as POST };