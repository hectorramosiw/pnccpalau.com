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
import { ArrowRight, Menu, Headset, Search } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";

export default function App({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col bg-gray-100">
            <div className="sticky md:relative top-0 z-50 w-full border-b border-transparent bg-gray-100">
                <div className="container mx-auto flex justify-between items-center w-full px-2">
                    {/* [Help and Support] ::start */}
                    <div className="mr-4 text-black">
                        <a
                            href="https://pnccpalau.smarthub.coop/Login.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center py-3"
                        >
                            Help and Support
                            <span className="ml-2 flex items-center justify-center">
                                <Headset className="h-auto w-4 text-black" />
                            </span>
                        </a>
                    </div>
                    {/* [Help and Support] ::end */}

                    {/* [Seatch] ::start */}
                    <div className="flex items-center space-x-2">
                        <Input
                            type="search"
                            placeholder="Search..."
                        />
                        <Search className="w-4 h-auto" />
                    </div>
                    {/* [Seatch] ::end */}
                </div>
                <div className="container flex max-w-screen-2xl items-center mx-auto bg-[#0a2239] text-white rounded-none md:rounded-lg px-2">
                    {/* [Mobile Header Layout (Hamburger menu left, Logo center, MyPNCC button right)] ::start */}
                    <div className="flex justify-between items-center w-full md:hidden">
                        
                        {/* [Hamburger menu | https://ui.shadcn.com/docs/components/sheet] ::start */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="link" size="icon" className="flex items-center text-white hover:text-yellow-400">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open main menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="bg-[#0a2239] text-white">
                                <SheetHeader>
                                    <SheetTitle className="text-white sr-only">PNCC Palau</SheetTitle>
                                    <img src="/logo.svg" alt="PNCC Palau Logo" className="h-20 w-auto" />
                                </SheetHeader>
                                <div className="flex flex-col gap-2 p-4">
                                    <h4 className="text-lg font-bold">Residential & Personal</h4>
                                    <ul>
                                        <li>
                                            <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href="#">
                                                Mobile
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href="#">
                                                Internet
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href="#">
                                                Telephone
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href="#">
                                                Digital TV
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href="#">
                                                Special Offers & Bundles
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href="#">
                                                4G WiFi Rental
                                            </a>
                                        </li>
                                    </ul>
                                    <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href="#">
                                        Business
                                    </a>
                                    <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href="#">
                                        Visitors
                                    </a>
                                    <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href="#">
                                        Online Store
                                    </a>
                                    <a className="block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href="#">
                                        About PNCC
                                    </a>
                                </div>
                            </SheetContent>
                        </Sheet>
                        {/* [Hamburger menu | https://ui.shadcn.com/docs/components/sheet] ::end */}
                        
                        {/* [Logo] ::start */}
                        <div className="flex flex-grow justify-center">
                            <a href="/" className="flex items-center space-x-2">
                                <img src="/logo.svg" alt="PNCC Palau Logo" className="h-22 w-auto" />
                            </a>
                        </div>
                        {/* [Logo] ::end */}
                        
                        {/* [MyPNCC button] ::start */}
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
                        {/* [MyPNCC button] ::end */}
                    </div>
                    {/* [Mobile Header Layout (Hamburger menu left, Logo center, MyPNCC button right)] ::end */}

                    {/* [Desktop Header Layout (Logo left, Nav center, MyPNCC button right)] ::start */}
                    <div className="hidden md:flex flex-1 items-center justify-between">
                        {/* [Logo] ::start */}
                        <div className="mr-4">
                            <a href="/" className="mr-6 flex items-center space-x-2">
                                <img src="/logo.svg" alt="PNCC Palau Logo" className="h-22 w-auto" />
                            </a>
                        </div>
                        {/* [Logo] ::end */}

                        {/* [Main Navigation | https://ui.shadcn.com/docs/components/navigation-menu] ::start */}
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:bg-transparent data-[state=open]:text-yellow-400 hover:bg-transparent hover:text-yellow-400 py-10 font-extrabold text-base">
                                        Residential & Personal
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[250px] gap-0 py-4 rounded-none">
                                            <li>
                                                <NavigationMenuLink asChild> 
                                                    <a
                                                        className="block select-none rounded-none px-3 leading-none no-underline outline-none transition-colors text-black hover:text-[#5f6f79] focus:text-[#5f6f79] hover:bg-gray-300 focus:bg-gray-300 font-bold text-lg py-5"
                                                        href="#"
                                                    >
                                                        <div className="font-bold text-base leading-none">Mobile</div>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="block select-none rounded-none px-3 leading-none no-underline outline-none transition-colors text-black hover:text-[#5f6f79] focus:text-[#5f6f79] hover:bg-gray-300 focus:bg-gray-300 font-bold text-lg py-5"
                                                        href="#"
                                                    >
                                                        <div className="font-bold text-base leading-none">Internet</div>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="block select-none rounded-none px-3 leading-none no-underline outline-none transition-colors text-black hover:text-[#5f6f79] focus:text-[#5f6f79] hover:bg-gray-300 focus:bg-gray-300 font-bold text-lg py-5"
                                                        href="#"
                                                    >
                                                        <div className="font-bold text-base leading-none">Telephone</div>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="block select-none rounded-none px-3 leading-none no-underline outline-none transition-colors text-black hover:text-[#5f6f79] focus:text-[#5f6f79] hover:bg-gray-300 focus:bg-gray-300 font-bold text-lg py-5"
                                                        href="#"
                                                    >
                                                        <div className="font-bold text-base leading-none">Digital TV</div>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="block select-none rounded-none px-3 leading-none no-underline outline-none transition-colors text-black hover:text-[#5f6f79] focus:text-[#5f6f79] hover:bg-gray-300 focus:bg-gray-300 font-bold text-lg py-5"
                                                        href="#"
                                                    >
                                                        <div className="font-bold text-base leading-none">Special Offers & Bundles</div>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="block select-none rounded-none px-3 leading-none no-underline outline-none transition-colors text-black hover:text-[#5f6f79] focus:text-[#5f6f79] hover:bg-gray-300 focus:bg-gray-300 font-bold text-lg py-5"
                                                        href="#"
                                                    >
                                                        <div className="font-bold text-base leading-none">4G WiFi Rental</div>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <a href="#">
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-white hover:bg-transparent hover:text-yellow-400 py-10 font-extrabold text-base')}>
                                            Business
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <a href="#">
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-white hover:bg-transparent hover:text-yellow-400 py-10 font-extrabold text-base')}>
                                            Visitors
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <a href="#">
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-white hover:bg-transparent hover:text-yellow-400 py-10 font-extrabold text-base')}>
                                            Online Store
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <a href="#">
                                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-white hover:bg-transparent hover:text-yellow-400 py-10 font-extrabold text-base')}>
                                            About PNCC
                                        </NavigationMenuLink>
                                    </a>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        {/* [Main Navigation | https://ui.shadcn.com/docs/components/navigation-menu] ::start */}

                        {/* [MyPNCC Button] ::start */}
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
                        {/* [MyPNCC Button] ::end */}
                    </div>
                    {/* [Desktop Header Layout (Logo left, Nav center, MyPNCC button right)] ::end */}

                </div>
            </div>

            {/* [Main Content of your page] ::start */}
            <main className="flex flex-1 flex-col">{children}</main>
            {/* [Main Content of your page] ::start */}

            {/* [Main Footer] ::start */}
            <MainFooter />
            {/* [Main Footer] ::end */}
        </div>
    );
}
