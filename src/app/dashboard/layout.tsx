import React from 'react'

import SideNavbar from '@/lib/layouts/Dashboard/sidenav'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/login')
  }
  return <SideNavbar>{children}</SideNavbar>
}
