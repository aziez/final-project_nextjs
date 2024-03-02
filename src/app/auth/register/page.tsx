/* eslint-disable no-empty-pattern */
import RegisterForm from '@/lib/layouts/Register/RegisterForm'
import React from 'react'

interface Props {}

function RegisterPage(props: Props) {
  const {} = props

  return (
    <div className="flex h-screen items-center justify-center">
      <RegisterForm />
    </div>
  )
}

export default RegisterPage
