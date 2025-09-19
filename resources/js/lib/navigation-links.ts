interface NavLink {
    title: string;
    href?: string;
    icon?: string;
    subLinks?: NavLink[];
}

export const navigationLinks: NavLink[] = [
    {
        title: 'Residential & Personal',
        icon: 'Home',
        subLinks: [
            { title: 'Overview', href: '/residential-and-personal', icon: 'LayoutDashboard' },
            { title: 'Mobile', href: '/residential-and-personal/mobile', icon: 'Smartphone' },
            { title: 'Internet', href: '/residential-and-personal/internet', icon: 'Wifi' },
            { title: 'Telephone', href: '/residential-and-personal/telephone', icon: 'Phone' },
            { title: 'Digital TV', href: '/residential-and-personal/digital-tv', icon: 'Tv' },
            { title: 'Special Offers & Bundles', href: '/residential-and-personal/special-offers', icon: 'Percent' },
            { title: '4G WiFi Rental', href: '/residential-and-personal/wifi-rental', icon: 'Router' },
        ],
    },
    {
        title: 'Business',
        href: '/business',
        icon: 'Briefcase',
    },
    {
        title: 'Visitors',
        href: '/visitors',
        icon: 'Globe',
    },
    {
        title: 'Online Store',
        href: '/online-store',
        icon: 'ShoppingCart',
    },
    {
        title: 'About PNCC',
        href: '/about-pncc',
        icon: 'Info',
    },
];
