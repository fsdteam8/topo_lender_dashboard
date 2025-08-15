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
  locations: z
    .array(
      z.string().min(1, "Location is required")
    )
    .min(1, "At least one location is required"),
  media: z.instanceof(File, { message: "Please upload a valid file" })
    .nullable()
    .optional(),
  rentalPrice4days: z
    .string()
    .nonempty("Rental price for 4 days is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Must be a valid number"),

  rentalPrice8days: z
    .string()
    .nonempty("Rental price for 8 days is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Must be a valid number"),

  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description cannot exceed 1000 characters"),

  materials: z
    .string()
    .min(1, "Materials are required")
    .max(200, "Materials cannot exceed 200 characters"),

  careInstructions: z
    .string()
    .min(1, "Care instructions are required")
    .max(500, "Care instructions cannot exceed 500 characters"),

});


export type ListingFormValues = z.infer<typeof listingSchema>;
