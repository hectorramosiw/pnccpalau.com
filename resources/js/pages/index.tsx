import MainLayout from '@/layouts/main-layout';
import { Head } from '@inertiajs/react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>Home</title>
                <meta name="description" content="Welcome to the PNCC Palau home page" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            <div className="container mx-auto">
                <Carousel 
                    plugins={[
                        Autoplay({
                            delay: 2000,
                        }),
                    ]}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        <CarouselItem>
                            <div className="items-center justify-center">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                                        Welcome to PNCC Palau
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">This is the new home page.</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="items-center justify-center">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                                        Welcome to PNCC Palau
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">This is the new home page.</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="items-center justify-center">
                                <div className="text-center">
                                    <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
                                        Welcome to PNCC Palau
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">This is the new home page.</p>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    {/* <CarouselPrevious />
                    <CarouselNext /> */}
                </Carousel>
            </div>
        </MainLayout>
    );
}
