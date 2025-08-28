"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import {
  Listing,
  ListingFormValues,
  listingSchema,
} from "@/types/listings/index";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import BasicDetailsForm from "./basic-details";
import DescriptionAndDetailsForm from "./description-and-details-form";
import MediaForm from "./media-form";
import PricingAndFeesForm from "./pricing-and-fees-form";

interface Props {
  token: string;
}

interface ApiProps {
  status: boolean;
  message: string;
  data: Listing;
}

export default function ListingForm({ token }: Props) {
  const { mutate: createListing, isPending } = useMutation({
    mutationKey: ["listing-create"],
    mutationFn: (reqBody: ListingFormValues) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/lender/listings`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(reqBody),
      }).then((res) => res.json()),
    onSuccess: (data: ApiProps) => {
      if (!data.status) {
        toast.error(data.message);
        return;
      }

      // ✅ Success toast with dressName
      const dressName = data?.data?.dressName || "your dress";
      toast.success("Successfully listed", {
        description: `Your dress "${dressName}" has been added to your listings.`,
      });
      form.reset(
        {
          dressName: "",
          brand: "",
          size: "S", // default size
          colour: "",
          condition: "Like New", // default condition
          category: "Formal", // default category
          description: "",
          material: "",
          careInstructions: undefined, // optional
          rentalPrice: {
            fourDays: 0,
            eightDays: 0,
          },
          media: [],
          pickupOption: "Local", // default pickup option
        },
        { keepValues: false } // ensures all values are replaced with these defaults
      );
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const form = useForm<ListingFormValues>({
    resolver: zodResolver(listingSchema),
    defaultValues: {
      dressName: "",
      brand: "",
      size: "S", // you can pick a reasonable default size
      colour: "",
      condition: "Like New", // default condition
      category: "Formal", // default category
      description: "",
      material: "",
      careInstructions: undefined, // optional
      rentalPrice: {
        fourDays: 0,
        eightDays: 0,
      },
      media: [],
      pickupOption: "Local", // default pickup option
    },
  });

  function onSubmit(values: ListingFormValues) {
    createListing(values);
  }

  return (
    <Card className="p-5  border-0">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className=" space-y-6"
        >
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Basic Details</CardTitle>
            </CardHeader>
            <CardContent>
              <BasicDetailsForm form={form} />
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Media</CardTitle>
            </CardHeader>
            <CardContent>
              <MediaForm form={form} />
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Price & Fees</CardTitle>
              <CardDescription>
                Note: This listing price is inclusive of dry-cleaning fees.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PricingAndFeesForm form={form} />
            </CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Description & Details</CardTitle>
            </CardHeader>
            <CardContent>
              <DescriptionAndDetailsForm form={form} />
            </CardContent>
          </Card>

          <div className="flex items-center justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
            <Button type="submit" effect="shineHover" disabled={isPending}>
              Save Listing{" "}
              {isPending && <Loader2 className="animate-spin ml-2" />}
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
