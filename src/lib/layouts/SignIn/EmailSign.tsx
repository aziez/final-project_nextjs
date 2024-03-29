'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/lib/components/ui/button'
import { Label } from '@/lib/components/ui/label'
import { Input } from '@/lib/components/ui/input'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import useStore from '@/lib/utils/store/userStore'

// Define type for form data
interface LoginFormValues {
  email: string
  password: string
}

const schema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
})

const LoginWithEmail: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({ resolver: zodResolver(schema) })

  const supabase = createClient()
  const router = useRouter()
  const { userData, setUserData } = useStore()

  const onSubmit = async (data: LoginFormValues) => {
    // console.log('Form data:', data)

    const { data: dataUser, error } =
      await supabase.auth.signInWithPassword(data)

    if (error) {
      console.error('error', error)
    } else {
      setUserData(dataUser)
      router.push('/dashboard')
      console.log('data login', userData)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col">
        <Label htmlFor="email" className="text-sm font-medium">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          {...register('email')}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
          {...register('password')}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}
      </div>
      <Button
        variant={'secondary'}
        type="submit"
        className="rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2"
      >
        Login
      </Button>
    </form>
  )
}

export default LoginWithEmail
