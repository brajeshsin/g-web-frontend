import z from "zod";

export const reservationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),

  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),

  session: z.enum(["Strength", "Conditioning", "Community Classes"]),
});
