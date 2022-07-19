import NextAuth from "next-auth";
import Providers from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers({
      clientId: '798014351741-nbfb8mur9nnp54alandgt4c88v64f54m.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
});