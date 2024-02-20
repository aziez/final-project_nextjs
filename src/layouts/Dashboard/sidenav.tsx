import { NavigationMenu, NavigationMenuContent, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

export default function SideNav() {
    return(

        <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
          <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
          {/* <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuTrigger>Component One</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
            </NavigationMenuList>
        </NavigationMenu> */}
        </div>
      </div>
    )
}