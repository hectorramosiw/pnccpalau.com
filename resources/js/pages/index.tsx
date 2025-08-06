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
import { ArrowRight, MapPin, Phone } from 'lucide-react';

export default function Index() {
    return (
        <MainLayout>
            {/* [Header] ::start */}
            <Head>
                <title>Home</title>
                <meta name="description" content="Welcome to the PNCC Palau home page" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>
            {/* [Header] ::end */}

            {/* [Carousel] ::start */}
            <div className="w-screen">
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
                                        <p className="mt-5 text-black">Enjoy Palua's Best Mobile Data - Highest LTE Speeds, Biggest Network Coverage, and many Prepaid and Postpaid options.</p>
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
                                        <p className="mt-5 text-black">Enjoy Palua's Best Mobile Data - Highest LTE Speeds, Biggest Network Coverage, and many Prepaid and Postpaid options.</p>
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
                                        <p className="mt-5 text-black">Enjoy Palua's Best Mobile Data - Highest LTE Speeds, Biggest Network Coverage, and many Prepaid and Postpaid options.</p>
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
            </div>
            
            {/* [Carousel] ::end */}

            {/* [How can we help?] ::start */}
            <div className="w-screen">
                <div className="container mx-auto items-center justify-center py-20">
                    <h2 className="text-3xl md:text-6xl font-extrabold text-center text-[#2babe2]">How can we help?</h2>
                    
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center p-5">
                            <div className="rounded-xl bg-gray-200/70 w-full h-full p-20 text-center">
                                <img src="/img/ui/icons/cart.svg" alt="PNCC Palau Logo" className="h-auto w-16 mx-auto" />
                                <p className="text-[#f96166] font-bold">
                                    Buy Prepaid Airtime or Internet Online
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-5">
                            <div className="rounded-xl bg-gray-200/70 w-full h-full p-20 text-center">
                                <img src="/img/ui/icons/hand-cursor.svg" alt="PNCC Palau Logo" className="h-auto w-16 mx-auto" />
                                <p className="text-[#f96166] font-bold">
                                    Pay my bill online, view bill history and check postpaid mobile data usage
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-5">
                            <div className="rounded-xl bg-gray-200/70 w-full h-full p-20 text-center">
                                <img src="/img/ui/icons/hand-cursor.svg" alt="PNCC Palau Logo" className="h-auto w-16 mx-auto" />
                                <p className="text-[#f96166] font-bold">
                                    Pay my bill online <br />
                                    (no registration required)
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-5">
                            <div className="rounded-xl bg-gray-200/70 w-full h-full p-20 text-center">
                                <img src="/img/ui/icons/app.svg" alt="PNCC Palau Logo" className="h-auto w-16 mx-auto" />
                                <p className="text-[#f96166] font-bold">
                                    Download the SmartHub App
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-5">
                            <div className="rounded-xl bg-gray-200/70 w-full h-full p-20 text-center">
                                <img src="/img/ui/icons/swim-ring.svg" alt="PNCC Palau Logo" className="h-auto w-16 mx-auto" />
                                <p className="text-[#f96166] font-bold">
                                    Customer Support: <br />
                                    Call 611
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center p-5">
                            <div className="rounded-xl bg-gray-200/70 w-full h-full p-20 text-center">
                                <img src="/img/ui/icons/rewards.svg" alt="PNCC Palau Logo" className="h-auto w-16 mx-auto" />
                                <p className="text-[#f96166] font-bold">
                                    Unlock exclusive rewards
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* [How can we help?] ::end */}

            {/* [Why PNCC?] ::start */}
            <div className="w-screen bg-[#2babe2]">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-items-center py-15">
                        <div className="w-full md:w-[60%] p-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Why PNCC?</h2>
                            <p className="text-white mt-5">
                                At PNCC, we've been keeping Palau connected since 1972. From mobile and internet to TV and custom tech solutions, we're here to serve every island and every community. Our team is passionate about bridging distances and bringing people closer - because for us, it's not just aboutthe technology, it's about connections.
                            </p>
                        </div>
                        <div className="w-full md:w-[40%] p-4">
                            <img src="/img/pages/index/img-06.png" alt="Why PNCC?" className="w-2/3 h-auto mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
            {/* [Why PNCC?] ::end */}
            
            {/* [Let's Connect] ::start */}
            <div className="w-screen">
                <div className="container mx-auto items-center justify-center py-20">
                    <h2 className="text-3xl md:text-6xl font-extrabold text-center text-[#2babe2]">Let's Connect</h2>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-6">
                            <Phone className="w-12 h-auto mb-2 text-black"/>
                            <h3 className="text-lg text-black font-normal mb-0">Aria HQ</h3>
                            <p>
                                <a href="tel:+6805879000" className="text-[#f96166] font-extrabold text-xl">680 587-9000</a>
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6">
                            <MapPin className="w-12 h-auto mb-2 text-black"/>
                            <h3 className="text-lg text-black font-normal mb-0">Address</h3>
                            <p>
                                <span className="text-[#f96166] font-extrabold text-xl">P.O. Box 99, Koror, PW 96940 Palau</span>
                            </p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6">
                            <Phone className="w-12 h-auto mb-2 text-black"/>
                            <h3 className="text-lg text-black font-normal mb-0">Korror Office</h3>
                            <p>
                                <a href="tel:+6804889000" className="text-[#f96166] font-extrabold text-xl">680 488-9000</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* [Let's Connect] ::end */}
        </MainLayout>
    );
}
