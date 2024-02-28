/* eslint-disable no-empty-pattern */
import { SignInForm } from '@/lib/layouts/SignIn/SignForm'
import React from 'react'

interface Props {}

function LoginPage(props: Props) {
  const {} = props

  return (
    <>
      {/* <h1>Ini halaman login</h1> */}
      <SignInForm />
    </>
  )
}

export default LoginPage
