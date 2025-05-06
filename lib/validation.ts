import * as z from 'zod';

export const personalInfoSchema = z.object({
  userName: z.string().min(3, "User name must be at least 3 characters long.").max(50, "Full name can be at most 50 characters long."),
  password: z.string().min(8, "Password must be at least 8 characters long.").max(20, "Password can be at most 20 characters long."),
});
