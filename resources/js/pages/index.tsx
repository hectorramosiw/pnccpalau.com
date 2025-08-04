import { Head } from '@inertiajs/react';

export default function Index() {
    return (
        <>
            <Head title="Home" />
            <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                        Welcome to PNCC Palau
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">This is the new home page.</p>
                </div>
            </div>
        </>
    );
}
