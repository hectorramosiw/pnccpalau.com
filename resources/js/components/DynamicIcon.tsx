import * as React from 'react';
import {
    Home,
    Briefcase,
    Globe,
    ShoppingCart,
    Info,
    LayoutDashboard,
    Smartphone,
    Wifi,
    Phone,
    Tv,
    Percent,
    Router,
    LucideProps,
} from 'lucide-react';

const iconMap: { [key: string]: React.ComponentType<LucideProps> } = {
    Home,
    Briefcase,
    Globe,
    ShoppingCart,
    Info,
    LayoutDashboard,
    Smartphone,
    Wifi,
    Phone,
    Tv,
    Percent,
    Router,
};

interface DynamicIconProps extends LucideProps {
    iconName: string;
}

export default function DynamicIcon({ iconName, ...props }: DynamicIconProps) {
    const IconComponent = iconMap[iconName];

    if (!IconComponent) {
        // Return a default icon or null if the icon name is not found
        return null;
    }

    return <IconComponent {...props} />;
}
