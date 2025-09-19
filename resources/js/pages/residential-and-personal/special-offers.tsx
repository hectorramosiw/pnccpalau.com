import Heading from '@/components/heading';
import { Head } from '@inertiajs/react';

export default function SpecialOffers() {
    return (
        <>
            <Head title="Special Offers & Bundles" />
            <div className="container mx-auto py-12">
                <Heading title="Special Offers & Bundles" />
                <p className="mt-4 text-lg">
                    Get the best value with our special offers and bundles.
                </p>
            </div>
        </>
    );
}
