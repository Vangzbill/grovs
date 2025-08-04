import { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const admin = await prisma.admin.findUnique({
          where: { email: credentials.email },
        });

        if (!admin) return null;

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          admin.password
        );

        if (!isPasswordCorrect) return null;

        return { id: String(admin.id), email: admin.email };
      },
    }),
  ],
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/admin/login",
  },
};
