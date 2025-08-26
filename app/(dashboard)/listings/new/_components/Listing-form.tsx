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
import { ListingFormValues, listingSchema } from "@/types/listings/index";
import BasicDetailsForm from "./basic-details";
import DescriptionAndDetailsForm from "./description-and-details-form";
import MediaForm from "./media-form";
import PricingAndFeesForm from "./pricing-and-fees-form";

export default function ListingForm() {
  const form = useForm<ListingFormValues>({
    resolver: zodResolver(listingSchema),
    defaultValues: {
      rentalPrice: {
        fourDays: 0,
        eightDays: 0,
      },
    },
  });

  function onSubmit(values: ListingFormValues) {
    // Replace with your submit logic (API call, etc.)
    console.log("Listing submitted:", values);
  }

  return (
    <Card className="p-5">
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
            <Button type="submit" effect="shineHover">
              Save Listing
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => form.reset()}
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
}
