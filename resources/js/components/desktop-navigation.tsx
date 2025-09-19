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
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationLinks } from '@/lib/navigation-links';

export default function DesktopNavigation() {
    return (
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
                    {navigationLinks.map((link) => (
                        <NavigationMenuItem key={link.title}>
                            {link.subLinks ? (
                                <>
                                    <NavigationMenuTrigger className="bg-transparent text-white data-[state=open]:bg-transparent data-[state=open]:text-yellow-400 hover:bg-transparent hover:text-yellow-400 py-10 font-extrabold text-base">
                                        {link.title}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="border-0 p-0">
                                        <ul className="grid py-4 w-[250px] gap-0 p-0 rounded-none border-t-8 border-[#2fc5c0]">
                                            {link.subLinks.map((subLink) => (
                                                <li className="rounded-none" key={subLink.title}>
                                                    <NavigationMenuLink asChild className="rounded-none">
                                                        <a
                                                            className="block select-none rounded-none px-3 leading-none no-underline outline-none transition-colors text-black hover:text-[#5f6f79] focus:text-[#5f6f79] hover:bg-gray-300 focus:bg-gray-300 font-bold text-lg py-5"
                                                            href={subLink.href}
                                                        >
                                                            <div className="font-bold text-base leading-none">{subLink.title}</div>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </>
                            ) : (
                                <NavigationMenuLink href={link.href} className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-white hover:bg-transparent hover:text-yellow-400 py-10 font-extrabold text-base')}>
                                    {link.title}
                                </NavigationMenuLink>
                            )}
                        </NavigationMenuItem>
                    ))}
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
    );
}
