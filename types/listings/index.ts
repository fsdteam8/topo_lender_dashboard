import { z } from "zod";

export const listingSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(120, { message: "Name must be at most 120 characters." }),
  brand: z
    .string()
    .min(2, { message: "Brand must be at least 2 characters." })
    .max(80, { message: "Brand must be at most 80 characters." }),
  size: z.enum(["XS", "S", "M", "L", "XL", "XXL"], {
    required_error: "Please select a size.",
  }),
  color: z
    .string()
    .min(1, { message: "Please enter a color." })
    .max(40, { message: "Color must be at most 40 characters." }),
  condition: z.enum(["new", "like_new", "good", "fair"], {
    required_error: "Please select a condition.",
  }),
  category: z.enum(
    ["clothing", "shoes", "accessories", "electronics", "home", "other"],
    {
      required_error: "Please select a category.",
    }
  ),
});

export type ListingFormValues = z.infer<typeof listingSchema>;
