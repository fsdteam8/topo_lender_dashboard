"use client";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { escalateFormSchema } from "@/schemas/escalateFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

type FormValues = z.input<typeof escalateFormSchema>;

const EscalateForm = () => {
  const [image, setImage] = useState<File | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(escalateFormSchema),
    defaultValues: {
      reason: "",
      description: "",
      priority: "Standard",
      evidence: [],
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log("values : ", values);
  };

  return (
    <div>
      <h1 className="text-xl font-medium mb-5">Escalation Details</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="bg-white p-6 rounded-lg space-y-5 shadow-[0px_4px_10px_0px_#0000001A]">
            {/* reason field */}
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason for Escalation *</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Write your reason"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* description field */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description *</FormLabel>

                  <FormControl>
                    <Textarea
                      className="h-[150px]"
                      placeholder="Write your reason"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* evidence field */}
            <FormField
              control={form.control}
              name="evidence"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Evidence</FormLabel>

                  <FormControl>
                    <div className="relative">
                      <Input
                        className="h-[60px]"
                        value={image ? image.name : ""}
                        placeholder="File name"
                        readOnly
                      />

                      <div className="flex items-center gap-2">
                        <Input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          id="evidence-upload"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              setImage(file);
                              field.onChange([
                                {
                                  filename: file.name,
                                  url: URL.createObjectURL(file),
                                },
                              ]);
                            }
                          }}
                        />
                        <Button
                          type="button"
                          onClick={() =>
                            document.getElementById("evidence-upload")?.click()
                          }
                          className="absolute right-4 top-[16%]"
                        >
                          Upload File
                        </Button>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* priority field */}
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Priority Label *</FormLabel>

                  <RadioGroup
                    className="flex items-center gap-5 border bg-background px-3 py-2 text-base h-12 rounded-md"
                    defaultValue="Standard"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Standard" id="Standard" />
                      <Label htmlFor="Standard">Standard</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="High" id="High" />
                      <Label htmlFor="High">High</Label>
                    </div>
                  </RadioGroup>
                </FormItem>
              )}
            />
          </div>

          <div>
            <Card className="p-6 bg-white shadow-[0px_4px_10px_0px_#0000001A] mt-8 border-none">
              <h1 className="text-xl font-medium text-gray-900 mb-6">
                Actions
              </h1>

              <div className="flex items-center gap-5">
                <Button type="submit">Escalate Dispute</Button>
                <Button type="button" variant="outline">
                  Contact Support
                </Button>
                <Button type="button" variant="outline">
                  Close
                </Button>
              </div>
            </Card>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default EscalateForm;
