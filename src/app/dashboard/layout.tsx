import React from 'react'

import SideNavbar from '@/lib/layouts/Dashboard/sidenav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SideNavbar>{children}</SideNavbar>
}
