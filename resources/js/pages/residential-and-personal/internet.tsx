import Heading from '@/components/heading';
import { Head } from '@inertiajs/react';

export default function Internet() {
    return (
        <>
            <Head title="Internet" />
            <div className="container mx-auto py-12">
                <Heading title="Internet" />
                <p className="mt-4 text-lg">
                    Enjoy fast and reliable internet for your home.
                </p>
            </div>
        </>
    );
}
