import Heading from '@/components/heading';
import { Head } from '@inertiajs/react';

export default function ResidentialAndPersonal() {
    return (
        <>
            <Head title="Residential & Personal" />
            <div className="container mx-auto py-12">
                <Heading title="Residential & Personal" />
                <p className="mt-4 text-lg">
                    Explore our range of services for your home and personal needs.
                </p>
            </div>
        </>
    );
}
