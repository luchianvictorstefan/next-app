"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
} from "@/components/ui/form"
import CustomFormField from '../CustomFormField'

export enum FormFieldType {
  INPUT = 'input',
  CHECKBOX = 'checkbox',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function PersonForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className='mb-12 space-y-4'>
          <h1 className='header'>Hi there</h1>
          <p className='text-dark-700'>Join us, we have cookies</p>
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            name='name'
            label='Full name'
            placeholder='John Doe'
            iconSrc='/assets/icons/user.svg'
            iconAlt='User icon'
            control={form.control}
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            name='email'
            label='Email'
            placeholder='test@test.com'
            iconSrc='/assets/icons/email.svg'
            iconAlt='email'
            control={form.control}
          />
          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name='phone'
            label='Phone number'
            placeholder='+4 0737 123 123'
          />
        </section>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default PersonForm