import Heading from '@/components/heading';
import { Head } from '@inertiajs/react';

export default function Mobile() {
    return (
        <>
            <Head title="Mobile" />
            <div className="container mx-auto py-12">
                <Heading title="Mobile" />
                <p className="mt-4 text-lg">
                    Stay connected with our flexible mobile plans.
                </p>
            </div>
        </>
    );
}
