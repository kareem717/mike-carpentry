"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ComponentPropsWithoutRef } from "react";
import { Textarea } from "./ui/textarea"
import { cn } from "@/lib/utils"
import { toast } from "sonner"
import { contactMessageSchema } from "@/actions/validations"
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendContactMessageAction } from "@/actions/mail"
import { z } from "zod";

interface ContactFormProps extends Omit<ComponentPropsWithoutRef<"form">, "onSubmit"> {
  onSubmit?: (values: z.infer<typeof contactMessageSchema>) => void
}

export function ContactForm({ className, onSubmit: onSubmitProp, ...props }: ContactFormProps) {
  const { form, handleSubmitWithAction } =
    useHookFormAction(sendContactMessageAction, zodResolver(contactMessageSchema), {
      actionProps: {
        onSuccess: ({ data }) => {
          console.log(data)
          toast.success("Form submitted successfully!")
          onSubmitProp?.(form.getValues())
        },
        onError: () => toast.error("Something went wrong!"),
      },
      formProps: {
        defaultValues: {
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        },
      },
    });

  return (
    <Form {...form}>
      <form onSubmit={handleSubmitWithAction} className={cn(className, "flex flex-col gap-8")} {...props}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="647 555 5555" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea {...field} className="min-h-40"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form >
  )
}