"use client"

import { UserFormValidation } from '@/app/lib/validation'
import {
  Form,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import { z } from "zod"
import CustomFormField from '../CustomFormField'
import { SubmitButton } from '../SubmitButton'

export enum FormFieldType {
  INPUT = 'input',
  CHECKBOX = 'checkbox',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton',
}



export function PersonForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {

      name: "",
      email: '',
      phone: ''
    },
  })

  // 2. Define a submit handler.
  function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      const userData = { name, email, phone }

      // const user = await createUser(userData);
      // if (user) router.push(`/persons/${user.$id}/register`)
    } catch (error) {
      console.log(error);
    }

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

        <SubmitButton isLoading={isLoading} >
          Get started</SubmitButton>
      </form>
    </Form>
  )
}

export default PersonForm