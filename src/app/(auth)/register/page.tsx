/* eslint-disable no-empty-pattern */
import { createClient } from '@/lib/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import { SubmitButton } from './submit-button'

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
        <h1 className="mb-4 text-2xl font-bold">Register</h1>

        {/* Email Input */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-bold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full rounded-md border px-3 py-2 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <SubmitButton
            formAction={signUp}
            pendingText="...prosessing"
            className="focus:shadow-outline-blue rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none active:bg-blue-800"
          >
            Register
          </SubmitButton>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
