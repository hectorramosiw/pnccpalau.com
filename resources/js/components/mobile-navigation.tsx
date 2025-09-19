import * as React from 'react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription,
} from '@/components/ui/sheet';
import { ArrowRight, Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navigationLinks } from '@/lib/navigation-links';
import DynamicIcon from './DynamicIcon';

export default function MobileNavigation() {
    const [openMenu, setOpenMenu] = React.useState<string | null>(null);

    const toggleMenu = (title: string) => {
        setOpenMenu(openMenu === title ? null : title);
    };

    return (
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
                        <SheetDescription className="sr-only">A mobile navigation menu with links to various pages.</SheetDescription>
                        <img src="/logo.svg" alt="PNCC Palau Logo" className="h-20 w-auto" />
                    </SheetHeader>
                    <div className="flex flex-col gap-2 p-4">
                        {navigationLinks.map((link) => (
                            <React.Fragment key={link.title}>
                                {link.subLinks ? (
                                    <>
                                        <button 
                                            className="flex items-center justify-between w-full select-none rounded-md p-3 font-bold text-base text-left"
                                            onClick={() => toggleMenu(link.title)}
                                        >
                                            <div className="flex items-center gap-2">
                                                {link.icon && <DynamicIcon iconName={link.icon} className="h-5 w-5" />}
                                                <span>{link.title}</span>
                                            </div>
                                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${openMenu === link.title ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openMenu === link.title && (
                                            <ul className="ml-4">
                                                {link.subLinks.map((subLink) => (
                                                    <li key={subLink.title}>
                                                        <a className="flex items-center gap-2 block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href={subLink.href}>
                                                            {subLink.icon && <DynamicIcon iconName={subLink.icon} className="h-5 w-5" />}
                                                            <span>{subLink.title}</span>
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <a className="flex items-center gap-2 block select-none rounded-md p-3 no-underline outline-none transition-colors hover:bg-white/10 hover:text-yellow-400 focus:bg-white/10 focus:text-yellow-400 font-bold text-base" href={link.href}>
                                        {link.icon && <DynamicIcon iconName={link.icon} className="h-5 w-5" />}
                                        <span>{link.title}</span>
                                    </a>
                                )}
                            </React.Fragment>
                        ))}
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
    );
}
