import Heading from '@/components/heading';
import { Head } from '@inertiajs/react';

export default function Telephone() {
    return (
        <>
            <Head title="Telephone" />
            <div className="container mx-auto py-12">
                <Heading title="Telephone" />
                <p className="mt-4 text-lg">
                    Crystal-clear home phone services.
                </p>
            </div>
        </>
    );
}
