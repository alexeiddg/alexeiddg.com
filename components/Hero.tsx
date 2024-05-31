import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/effects/text-generate-effect";
import MagicButton from "@/components/ui/magic-button";
import Link from "next/link";

const Hero = () => {
    return (
        <div className="pb-20 pt-36 relative">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="top-10 left-full h-[80vh] w-[50vw]"
                    fill="purple"
                />
                <Spotlight
                    className="top-28 left-80 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>

            <div
                className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
                absolute top-0 left-0 flex items-center justify-center bg-opacity-30"
            >
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                    bg-white dark:bg-opacity-60 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center sm:pt-4">
                    <div className="inline-block mb-4">
                        <span className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4 inline">
                            Effective Solutions to Elevate Your Business
                        </span>
                    </div>

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl mb-4"
                        words="Architecting Fullstack Solutions That Lead to Success."
                    />

                    <p className="text-center md:tracking-wider pt-4 text-sm md:text-base lg:text-lg">
                        My name is Alexei, I'm a Fullstack Application Developer based in Guadalajara, Mexico.
                    </p>

                    <div className="pt-4">
                        <Link href="/projects">
                            <MagicButton
                                title="See my Work!"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
