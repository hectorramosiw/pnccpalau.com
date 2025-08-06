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
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
                            <div className="flex flex-col md:flex-row items-center justify-items-center">
                                <div className="w-full md:w-[60%] p-4">
                                    <h2 className="text-3xl md:text-6xl font-extrabold text-[#2babe2]">Maximize your mobile data with PNCC 4G Coverage</h2>
                                    <p className="mt-5">Enjoy Palua's Best Mobile Data - Highest LTE Speeds, Biggest Network Coverage, and many Prepaid and Postpaid options.</p>
                                    <Button asChild className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 mt-10 p-5 md:p-8 shadow-[6px_6px_0] shadow-gray-500/50">
                                        <a
                                            href="https://pnccpalau.smarthub.coop/Login.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Learn More
                                            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                                                <ArrowRight className="h-2 w-2 text-white" />
                                            </span>
                                        </a>
                                    </Button>
                                </div>
                                <div className="w-[40%] p-4 hidden md:block">
                                    <img src="/img/ui/slider/img-01.png" alt="4G Coverage" className="w-full h-auto" />
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex flex-col md:flex-row items-center justify-items-center">
                                <div className="w-full md:w-[60%] p-4">
                                    <h2 className="text-3xl md:text-6xl font-extrabold text-[#2babe2]">Maximize your mobile data with PNCC 4G Coverage</h2>
                                    <p className="mt-5">Enjoy Palua's Best Mobile Data - Highest LTE Speeds, Biggest Network Coverage, and many Prepaid and Postpaid options.</p>
                                    <Button asChild className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 mt-10 p-5 md:p-8 shadow-[6px_6px_0] shadow-gray-500/50">
                                        <a
                                            href="https://pnccpalau.smarthub.coop/Login.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Learn More
                                            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                                                <ArrowRight className="h-2 w-2 text-white" />
                                            </span>
                                        </a>
                                    </Button>
                                </div>
                                <div className="w-[40%] p-4 hidden md:block">
                                    <img src="/img/ui/slider/img-01.png" alt="4G Coverage" className="w-full h-auto" />
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex flex-col md:flex-row items-center justify-items-center">
                                <div className="w-full md:w-[60%] p-4">
                                    <h2 className="text-3xl md:text-6xl font-extrabold text-[#2babe2]">Maximize your mobile data with PNCC 4G Coverage</h2>
                                    <p className="mt-5">Enjoy Palua's Best Mobile Data - Highest LTE Speeds, Biggest Network Coverage, and many Prepaid and Postpaid options.</p>
                                    <Button asChild className="rounded-full bg-yellow-400 text-black hover:bg-yellow-500 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 mt-10 p-5 md:p-8 shadow-[6px_6px_0] shadow-gray-500/50">
                                        <a
                                            href="https://pnccpalau.smarthub.coop/Login.html"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Learn More
                                            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-black">
                                                <ArrowRight className="h-2 w-2 text-white" />
                                            </span>
                                        </a>
                                    </Button>
                                </div>
                                <div className="w-[40%] p-4 hidden md:block">
                                    <img src="/img/ui/slider/img-01.png" alt="4G Coverage" className="w-full h-auto" />
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
