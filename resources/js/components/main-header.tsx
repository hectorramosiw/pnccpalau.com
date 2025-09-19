import * as React from 'react';
import { Headset, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import MobileNavigation from './mobile-navigation';
import DesktopNavigation from './desktop-navigation';

export default function MainHeader() {
    return (
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
                {/* [Mobile Navigation | mobile-navigation.tsx] ::start */}
                <MobileNavigation />
                {/* [Mobile Navigation | mobile-navigation.tsx] ::end */}

                {/* [Desktop Navigation | desktop-navigation.tsx] ::start */}
                <DesktopNavigation />
                {/* [Desktop Navigation | desktop-navigation.tsx] ::end */}
            </div>
        </div>
    );
}
