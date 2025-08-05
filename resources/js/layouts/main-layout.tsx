import * as React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import MainFooter from '@/components/main-footer';
import { cn } from '@/lib/utils';
import { ArrowRight, Menu } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';

// Helper component for list items in the navigation menu
const ListItem = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<'a'> & { title: string }
>(({ className, title, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none rounded-none p-3 leading-none no-underline outline-none transition-colors text-black hover:text-[#5f6f79] focus:text-[#5f6f79] hover:bg-gray-300 focus:bg-gray-300',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';

// Mobile menu list item
const MobileListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & { title: string }
>(({ className, title, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          'block select-none rounded-md p-3 text-sm font-medium no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400',
          className,
        )}
        {...props}
      >
        {title}
      </a>
    </li>
  );
});
MobileListItem.displayName = 'MobileListItem';

// Define the navigation links in a data structure for better maintainability
const mainNavLinks = [
  {
    title: 'Business',
    href: '#',
  },
  {
    title: 'Visitors',
    href: '#',
  },
  {
    title: 'Online Store',
    href: '#',
  },
  {
    title: 'About PNCC',
    href: '#',
  },
];

const residentialLinks = [
  { href: '#', title: 'Mobile' },
  { href: '#', title: 'Internet' },
  { href: '#', title: 'Telephone' },
  { href: '#', title: 'Digital TV' },
  { href: '#', title: 'Special Offers & Bundles' },
  { href: '#', title: '4G WiFi Rental' },
];

export default function App({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
            <header className="sticky top-0 z-50 w-full border-b border-transparent">
                <div className="container flex h-14 max-w-screen-2xl items-center mx-auto bg-[#0a2239] text-white rounded-sm px-2">
                    {/* [Logo] ::start */}
                    <div className="flex flex-1 justify-start">
                        <div className="mr-4">
                            <a href="#" className="mr-6 flex items-center space-x-2">
                                <img src="/logo.svg" alt="PNCC Palau Logo" className="h-8 w-auto" />
                            </a>
                        </div>
                    </div>
                    {/* [Logo] ::end */}

                    {/* [Mobile Navigation] ::start */}
                    <div className="flex justify-start md:hidden">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="flex items-center text-white hover:text-yellow-400"
                                >
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open main menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="bg-[#0a2239] text-white">
                                <SheetHeader>
                                    <SheetTitle className="text-white">PNCC Palau</SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-2 p-4">
                                    <h4 className="text-lg font-bold">Residential & Personal</h4>
                                    <ul>
                                        {residentialLinks.map((link) => (
                                            <MobileListItem key={link.title} href={link.href} title={link.title} />
                                        ))}
                                    </ul>
                                    {mainNavLinks.map((link) => (
                                        <MobileListItem key={link.title} href={link.href} title={link.title} />
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                    {/* [Mobile Navigation] ::end */}


                    {/* [Main Navigation | ShadcnUI > Navigation Menu] ::start */}
                    <div className="hidden justify-center md:flex">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:bg-transparent data-[state=open]:text-yellow-400 hover:bg-transparent hover:text-yellow-400">
                                        Residential & Personal
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-[#f5f5f5] text-white rounded-none p-0">
                                        <ul className="grid w-[250px] gap-3 py-4 rounded-none">
                                            {residentialLinks.map((link) => (
                                                <ListItem key={link.title} href={link.href} title={link.title} />
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                {mainNavLinks.map((link) => (
                                    <NavigationMenuItem key={link.title}>
                                        <a href={link.href}>
                                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-white hover:bg-transparent hover:text-yellow-400')}>
                                                {link.title}
                                            </NavigationMenuLink>
                                        </a>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    {/* [Main Navigation | ShadcnUI > Navigation Menu] ::end */}

                    {/* [MyPNCC Button | ShadcnUI > Button] ::start */}
                    <div className="flex flex-1 items-center justify-end">
                        <Button asChild className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500">
                            <a
                                href="https://pnccpalau.smarthub.coop/Login.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                MyPNCC
                                <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                                    <ArrowRight className="h-2 w-2 text-white" />
                                </span>
                            </a>
                        </Button>
                    </div>
                    {/* [MyPNCC Button | ShadcnUI > Button] ::end */}
                </div>
            </header>
            <main className="flex flex-1 flex-col">{children}</main>

            {/* [Main Footer] ::start */}
            <MainFooter />
            {/* [Main Footer] ::end */}
        </div>
    );
}
