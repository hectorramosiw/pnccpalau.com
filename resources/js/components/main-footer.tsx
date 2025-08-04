import { Link } from '@inertiajs/react';

export default function MainFooter() {
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto flex flex-col items-center gap-4 py-10">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Link href={route('site.map')} className="transition-colors hover:text-foreground">
                        Site Map
                    </Link>
                    |
                    <Link href={route('general.policies')} className="transition-colors hover:text-foreground">
                        General Policies
                    </Link>
                    |
                    <a
                        href="https://mail.palaunet.com/Login.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-foreground"
                    >
                        Webmail
                    </a>
                    |
                    <Link href={route('subscribe.newsletter')} className="transition-colors hover:text-foreground">
                        Sign Up for our Newsletter
                    </Link>
                    |
                    <Link href={route('rfp')} className="transition-colors hover:text-foreground">
                        RFP
                    </Link>
                </div>
                <p className="text-center text-sm leading-loose text-muted-foreground">
                    &copy; {new Date().getFullYear()} Palau National Communications Corporation. All rights reserved. Site by{' '}
                    <a
                        href="https://ninthdesign.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-4 transition-colors hover:text-foreground"
                    >
                        Ninth Design | Web Development Solutions
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
}
