import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <MainLayout>
            <Head title="Home" />
            <div className="flex flex-1 items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                        Welcome to PNCC Palau
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">This is the new home page.</p>
                </div>
            </div>
        </MainLayout>
    );
}
