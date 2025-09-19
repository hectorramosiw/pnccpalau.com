import Heading from '@/components/heading';
import { Head } from '@inertiajs/react';

export default function WifiRental() {
    return (
        <>
            <Head title="4G WiFi Rental" />
            <div className="container mx-auto py-12">
                <Heading title="4G WiFi Rental" />
                <p className="mt-4 text-lg">
                    Portable WiFi for when you're on the go.
                </p>
            </div>
        </>
    );
}
