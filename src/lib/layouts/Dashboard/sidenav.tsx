// components/SideNavbar.js
"use client";
import { useState } from "react";
import { routes } from "./routes";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface SideNavItem {
  label: string;
  href: string;
  icon?: React.FC<any>;
}

const SideNav: React.FC = () => {
  const [active, setActive] = useState("");
  const { pathname } = useRouter();

  const handleClick = (href: string) => {
    setActive(href);
  };

  return (
    <div className="bg-gray-800 h-screen w-64">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16">
          <img src="/logo.svg" alt="Logo" />
        </div>
        <ul className="flex flex-col mt-4">
          {routes.map((item: SideNavItem) => (
            <li key={item.label}>
              <Link
                href={item.href}
                id={item.href}
                className={`flex items-center p-4 text-gray-200 hover:bg-gray-700 transition-all duration-200 ${
                  pathname === item.href && "bg-gray-700"
                }`}
                onClick={() => handleClick(item.href)}
              >
                {item.icon && <item.icon className="h-6 w-6 mr-2" />}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
