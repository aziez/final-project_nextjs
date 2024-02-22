import SideNavbar from "@/lib/layouts/Dashboard/sidenav";
import SideNav from "@/lib/layouts/Dashboard/sidenav";
import { useRouter } from "next/navigation";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SideNavbar>{children}</SideNavbar>;
}
