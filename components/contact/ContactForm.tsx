"use client";
import React from "react";
import { Input } from "../ui/input";
import { ArrowUpRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

const formSchema = z.object({
  name: z.string().min(5, {
    message: "Name must be at least 5 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  subject: z.string(),
  message: z.string().min(5, {message: "Please write a message"}),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "residential solar",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset(); 

    toast.success('Message sent successfully!');
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4 mt-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-textGray text-sm">
                <span className="text-textBlack font-semibold">Full Name</span>{" "}
                (Required)
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  {...field}
                  className="shadow-none rounded-none h-10 text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-textGray text-sm">
                <span className="text-textBlack font-semibold">
                  Email Address
                </span>{" "}
                (Required)
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  className="shadow-none rounded-none h-10 text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-textGray text-sm">
                <span className="text-textBlack font-semibold">Phone</span>{" "}
                (optional)
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  {...field}
                  className="shadow-none rounded-none h-10 text-sm"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-textGray text-sm">
                <span className="text-textBlack font-semibold text-sm">
                  Subject
                </span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4 flex-wrap"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="residential solar" id="r1" />
                    <Label htmlFor="r1">Residential Solar</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="commercial solar" id="r2" />
                    <Label htmlFor="r2">Commercial Solar</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="r3" />
                    <Label htmlFor="r3">Other</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* <div className="flex flex-col gap-2">
          <span className="text-textBlack font-semibold text-sm">Subject</span>
          <RadioGroup
            defaultValue="residential"
            className="flex gap-4 flex-wrap"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="residential" id="r1" />
              <Label htmlFor="r1">Residential Solar</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="commercial" id="r2" />
              <Label htmlFor="r2">Commercial Solar</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="r3" />
              <Label htmlFor="r3">Other</Label>
            </div>
          </RadioGroup>
        </div> */}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-textGray text-sm">
                <span className="text-textBlack font-semibold">Message</span>{" "}
                (Tell us how we can help)
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here."
                  className="w-full border text-sm p-4"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          variant="ghost"
          className="p-0 h-max w-max ml-auto cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-max gap-4 py-2 px-2 rounded-full bg-dark-bg">
            <p className="text-sm pl-4 text-container">Request a Free Quote</p>
            <span
              className="p-2 rounded-full bg-container"
              aria-label="Get Free Consultation"
            >
              <ArrowUpRight className="text-dark-bg" />
            </span>
          </div>
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
