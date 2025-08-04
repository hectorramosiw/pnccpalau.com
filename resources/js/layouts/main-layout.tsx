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
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';

const ListItem = React.forwardRef<
    HTMLAnchorElement,
    React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        'block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';

export default function MainPublicLayout({ children }: PropsWithChildren) {
    const { auth } = usePage<SharedData>().props;

    return (
        <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border/40">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    <div className="mr-4 hidden md:flex">
                        <Link href="/" className="mr-6 flex items-center space-x-2">
                            <span className="hidden font-bold sm:inline-block">PNCC Palau</span>
                        </Link>
                    </div>

                    <div className="flex flex-1 items-center justify-end space-x-2">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Residential & Personal</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[250px] gap-3 p-4">
                                            <ListItem href={route('residential.mobile')} title="Mobile" />
                                            <ListItem href={route('residential.internet')} title="Internet" />
                                            <ListItem href={route('residential.telephone')} title="Telephone" />
                                            <ListItem href={route('residential.digital-tv')} title="Digital TV" />
                                            <ListItem href={route('residential.special-offers')} title="Special Offers & Bundles" />
                                            <ListItem href={route('residential.4g-wifi-rental')} title="4G WiFi Rental" />
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href={route('business')}>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Business
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href={route('visitors')}>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Visitors
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href={route('online-store')}>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Online Store
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href={route('about-pncc')}>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            About PNCC
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>

                                {auth.user && (
                                    <NavigationMenuItem>
                                        <Link href={route('dashboard')}>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                Dashboard
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </header>
            <main className="flex flex-1 flex-col">{children}</main>
        </div>
    );
}
