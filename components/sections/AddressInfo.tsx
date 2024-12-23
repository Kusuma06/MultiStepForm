"use client";

import React from "react";
import * as z from "zod";

import SectionHeader from "../SectionHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import useStore from "@/store/useStore";
import Container from "../Container";

const formSchema = z.object({
  country: z.string().min(5, { message: "Country is required" }).max(100),
  state: z.string().min(3, { message: "State is required" }).max(20),
  city: z.string().min(5, { message: "City is required" }).max(30),
  zipcode: z.string().refine((val) => /^\d{6}$/.test(val), {
    message: "Zipcode is required",
  }),
});

type ValidationSchema = z.infer<typeof formSchema>;

export default function AddressInfo() {
  const { addressInfo,step, setAddressInfo, increaseStep,decreaseStep } = useStore(
    (state) => state
  );
  const form = useForm<ValidationSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...addressInfo },
  });
  const {
    control,
    formState: { errors },
  } = form;
  const onPrevious = () => {
    decreaseStep(step);
  };
  const onSubmitHandler = (values: ValidationSchema) => {
    setAddressInfo({ ...addressInfo, ...values });
    increaseStep(2);
  };

  return (
    <Container onNext={form.handleSubmit(onSubmitHandler)} onPreviousStep={onPrevious}>
      <SectionHeader
        title="Address info"
        description="Please provide Country,State,city, and zipcode of your current location."
      />
      <Form {...form}>
        <form
          className="flex flex-col gap-6"
          onSubmit={() => form.handleSubmit(onSubmitHandler)}
        >
          <FormField
            control={control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                  Country
                  <FormMessage>{errors.country?.message}</FormMessage>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red": errors.country?.message,
                      }
                    )}
                    placeholder="e.g. India"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                  State
                  <FormMessage>{errors.state?.message}</FormMessage>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red":
                          errors.state?.message,
                      }
                    )}
                    placeholder="e.g. andhra pradesh"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                  City
                  <FormMessage>{errors.city?.message}</FormMessage>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red":
                          errors.city?.message,
                      }
                    )}
                    placeholder="e.g. Anakapalle"
                    {...field}
                  />
                  </FormControl>
              </FormItem>
            )}
          />
                  <FormField
            control={control}
            name="zipcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-c-primary-marine-blue flex items-center justify-between">
                  Zipcode
                  <FormMessage>{errors.zipcode?.message}</FormMessage>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      "placeholder:font-medium placeholder:text-c-neutral-cool-gray border-c-neutral-light-gray text-c-primary-marine-blue",
                      {
                        "border-c-primary-strawberry-red":
                          errors.zipcode?.message,
                      }
                    )}
                    placeholder="e.g. 531001"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </Container>
  );
}
