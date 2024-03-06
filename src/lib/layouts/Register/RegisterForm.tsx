'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/lib/components/ui/input'
import { editData } from '@/lib/utils/fetchingData'
import { SubmitHandler, useForm } from 'react-hook-form'
import React, { FC, useState } from 'react'
import { Label } from '@/lib/components/ui/label'
import LoadingButton from './SubmitButton'
import { createClient } from '@/lib/supabase/client'
import { useToast } from '@/lib/components/ui/use-toast'
import { Feedback } from './Feedback'
import { useRouter } from 'next/navigation'

interface DataUser {
  id: string
  storename: string
  email: string
  contact: string
  password: string
  passConfirm: string
}

const formSchema = z.object({
  storeName: z.string().min(3).max(50),
  username: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string(),
})

type RegistrationData = z.infer<typeof formSchema>

export const RegisterForm: React.FC = () => {
  const [feedback, setFeedback] = useState(false)
  const [message, setMessage] = useState('')
  const [heading, setHeading] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>({
    resolver: zodResolver(formSchema),
  })

  const handleFeedbackClose = () => {
    setFeedback(false)
  }

  const onSubmit: SubmitHandler<RegistrationData> = async (data) => {
    setLoading(true)
    const supabase = createClient()
    const { data: dataRegist, error } = await supabase.auth.signUp(data)

    if (error) {
      setFeedback(true)
      setHeading('Error')
      setMessage('error registrasi')
    } else {
      setFeedback(true)
      setHeading('Berhasil')
      setMessage('Registrasi berhasil')
      setLoading(false)
      setTimeout(() => {
        router.push('/login')
      }, 1500)
    }
  }

  return (
    <>
      {feedback && (
        <Feedback
          heading={heading}
          message={message}
          show={feedback}
          onClose={handleFeedbackClose}
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-4 mx-auto max-w-md"
      >
        <div className="my-4">
          <Label
            htmlFor="storeName"
            className="block text-sm font-medium text-gray-700"
          >
            Nama Toko
          </Label>
          <Input
            id="storeName"
            {...register('storeName')}
            className={`mt-1 block w-full border px-3 py-2 ${errors.storeName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
          />
          {errors.storeName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.storeName.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <Label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </Label>
          <Input
            id="username"
            {...register('username')}
            className={`mt-1 block w-full border px-3 py-2 ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-500">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            className={`mt-1 block w-full border px-3 py-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="my-4">
          <Label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            {...register('password')}
            className={`mt-1 block w-full border px-3 py-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <Label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Konfirmasi Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            className={`mt-1 block w-full border px-3 py-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm`}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="my-4">
          <LoadingButton
            disabled={loading}
            loading={loading}
            className="focus:shadow-outline-blue rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none active:bg-blue-800"
          >
            Register
          </LoadingButton>
        </div>
      </form>
    </>
  )
}
