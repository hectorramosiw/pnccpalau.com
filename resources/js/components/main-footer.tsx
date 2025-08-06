import { Link } from '@inertiajs/react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function MainFooter() {
    return (
        <footer className="bg-[#0a2239] text-white">
            <div className="container mx-auto py-10 px-4">
                <div className="grid grid-cols-1 gap-8 text-sm md:grid-cols-4">
                    <div className="flex flex-col items-center">
                        <Link href="/">
                            <img src="/logo.svg" alt="PNCC Palau Logo" className="h-24 w-auto" />
                        </Link>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                <span className="sr-only">YouTube</span>
                                <Youtube className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Mobile
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Internet
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Telephone
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Digital TV
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Special Offers & Bundles
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li>
                                <Link href={route('general.policies')} className="text-neutral-300 transition-colors hover:text-white">
                                    Mobile Support
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Internet Support
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Telephone Support
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Digital TV Support
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Billing and SmartHub Support
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Support Documents & Downloads
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    TV Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Palau Directory
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    News
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Contest
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Site Map
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    General Policies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Web Mail
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    Newsletter
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-neutral-300 transition-colors hover:text-white">
                                    RFP
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Separator className="my-4 border-t border-neutral-700" />
            <div className="container mx-auto flex flex-col items-center gap-4 py-10">
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                    <Link href={route('site.map')} className="transition-colors hover:text-neutral-300">
                        Site Map
                    </Link>
                    |
                    <a
                        href="https://mail.palaunet.com/Login.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-neutral-300"
                    >
                        Webmail
                    </a>
                    |
                    <Link href={route('subscribe.newsletter')} className="transition-colors hover:text-neutral-300">
                        Sign Up for our Newsletter
                    </Link>
                    |
                    <Link href={route('rfp')} className="transition-colors hover:text-neutral-300">
                        RFP
                    </Link>
                </div>
                <p className="text-center text-sm leading-loose">
                    &copy; {new Date().getFullYear()} Palau National Communications Corporation. All rights reserved. Site by{' '}
                    <a
                        href="https://ninthdesign.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-4 transition-colors hover:text-neutral-300"
                    >
                        Ninth Design | Web Development Solutions
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
}
