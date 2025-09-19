import Heading from '@/components/heading';
import { Head } from '@inertiajs/react';

export default function DigitalTv() {
    return (
        <>
            <Head title="Digital TV" />
            <div className="container mx-auto py-12">
                <Heading title="Digital TV" />
                <p className="mt-4 text-lg">
                    Your favorite channels with our Digital TV packages.
                </p>
            </div>
        </>
    );
}
