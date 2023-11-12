import { Clerk } from "@clerk/backend";
console.log(process.env.CLERK_SECRET_KEY);
export const clerk = Clerk({
  apiKey: process.env.CLERK_SECRET_KEY,
});
