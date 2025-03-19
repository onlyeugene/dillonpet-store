import * as z from "zod";

export const useRegisterSchema = z.object({
  firstName: z.string().min(1, {
    message: "First Name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last Name is required",
  }),
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters long",
    })
    .regex(/^[A-Z]/, {
      message: "Password must start with an uppercase letter",
    })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    }),
  phoneNumber: z.string().min(10, {
    message: "Phone Number is required",
  }),
});

export const useLoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email",
  }),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});
