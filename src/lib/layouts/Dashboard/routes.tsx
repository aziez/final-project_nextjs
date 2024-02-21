export const routes: SideNavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l9-9 9 9M15 3h6v18h-6v-6a6 6 0 00-6-6zm-4.243 1.311a6 6 0 00-6.243 6.243C12.757 17.757 15 14.243 15 12c0-2.243-2.243-4-5-4z"
        />
      </svg>
    ),
  },
  {
    label: "Produk",
    href: "/produk",
    icon: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 16v-8l-8 4L4 8v8h13m0 0l3 3m-3-3l-3-3"
        />
      </svg>
    ),
  },
];
