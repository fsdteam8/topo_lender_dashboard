"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { ListingFormValues, listingSchema } from "@/types/listings/index";
import BasicDetailsForm from "./basic-details";
import Locationavailable from "./Locationavailable";
import MediaForm from "./MediaForm";
import PricingFees from "./Pricing&Fees";
import DescriptionDetails from "./Description&Details";

export default function ListingForm() {
  const form = useForm<ListingFormValues>({
    resolver: zodResolver(listingSchema),
    defaultValues: {
      name: "",
      brand: "",
      size: "M",
      color: "#000000",
      condition: "new",
      category: "other",
      locations: [""],
      media: null,
      rentalPrice4days: "",
      rentalPrice8days: "",
      description: "",
      materials: "",
      careInstructions: ""
    },
  });

  function onSubmit(values: ListingFormValues) {

    console.log("Listing submitted:", values);
  }

  return (
    <Card className="p-0">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          noValidate
          className=" space-y-6"
        >
          <Card className="shadow-none border-none p-0">
            <CardHeader>
            </CardHeader>
            <CardContent >
              <div className="flex flex-col gap-7">
                <BasicDetailsForm form={form} />
                <Locationavailable form={form} />
                <MediaForm form={form} />
                <PricingFees form={form} />
                <DescriptionDetails form={form} />
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-end gap-3">
            <Button type="submit">Save Listing</Button>
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
