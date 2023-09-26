import { z } from 'zod';

export const newUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  urn: z.string(),
  password: z.string().min(4, { message: 'Weak Password!' }),
  age: z.number(),
  email: z.string().email('Not a valid email!'),
  role: z.string(),
});
