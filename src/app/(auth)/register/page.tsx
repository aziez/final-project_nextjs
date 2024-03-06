/* eslint-disable no-empty-pattern */
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import { SubmitButton } from './submit-button'
import { RegisterForm } from '@/lib/layouts/Register/RegisterForm'

interface Props {}

function RegisterPage(props: Props) {
  const {} = props

  const signUp = async (formData: FormData) => {
    'use server'
    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const supabase = createClient()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      console.log(error, 'Error Auth')
    }

    return redirect('/auth/login')
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-96 rounded bg-white p-8 shadow-md">
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
