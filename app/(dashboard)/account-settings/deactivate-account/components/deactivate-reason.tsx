import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const formSchema = z.object({
  reason: z.string().min(1, {
    message: "Reason is required",
  }),
  feedback: z.string().min(1, {
    message: "Feedback is required",
  }),
});

type FormValue = z.input<typeof formSchema>;

const DeactivateReason = () => {
  const form = useForm<FormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      reason: "",
      feedback: "",
    },
  });

  const onSubmit = (value: FormValue) => {
    console.log("value: ", value);
  };

  return (
    <Card className="p-6 bg-white shadow-[0px_4px_10px_0px_#0000001A] mt-8 border-none">
      <h1 className="text-xl font-medium mb-5">Reason for Deactivation</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="reason"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-red-700">
                  Why are you deactivating? *
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Write your reason..."
                    {...field}
                    className="h-[50px]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="feedback"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-red-700">
                  Additional Feedback (Optional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g., "
                    {...field}
                    className="h-[150px]"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Start Deactivation</Button>
        </form>
      </Form>
    </Card>
  );
};

export default DeactivateReason;
