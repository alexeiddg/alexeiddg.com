import Link from "next/link";

export default function About() {
    return (
        <section className="bg-background pt-52 flex flex-col sm:flex-row" id="about">
            <div className="pb-12">
                <h2 className="pl-12 font-extrabold text-2xl sm:text-6xl font-RobotoSerif">
                    About
                </h2>
                <p className="pl-10 pt-4 text-lg sm:text-2xl">
                    WORK WITH ME, <br/>
                    CONTACT ME, <br/>
                    OR JUST SAY HELLO. <br/>
                </p>
                <div className="pl-12 pt-16 sm:pt-52 flex flex-col justify-center">
                    <ul className="text-center space-y-2">
                        <li><a>Pathscreative</a></li>
                        <li><a>Launchstar CMS</a></li>
                        <li><a href="https://www.linkedin.com/in/alexeidg/" className="underline">LinkedIn</a><br/></li>
                        <li><a className="underline text-blue-text">becreative@pathscreative.com</a><br/></li>
                        <li><Link href="/experience" className="underline">CV</Link><br/></li>
                    </ul>
                </div>
                <div className="pl-12 pt-12 sm:pt-72">
                    <p className="font-light text-xs text-center">Based In Mexico, Available Worldwide.</p>
                    <p className="font-light text-sm">&copy Alexei Delgado &copy; 2024</p>
                </div>
            </div>
            <div className="relative flex items-stretch">
                <div className="absolute inset-y-0 left-12 w-1 bg-black"></div>
            </div>
            <div className="flex flex-col px-12 sm:flex-1   ">
                <h2 className="px-16 font-extrabold text-4xl">About Me:</h2>
                <p className="px-16 sm:px-32 pt-4 sm:text-base">
                    &quot;
                    Leveraging experience in digital craftsmanship and leading development teams,
                    I bring a wealth of knowledge and expertise to each project. My focus is on helping
                    companies elevate their work, optimize design, and leap into the future with confidence.
                    I offer robust, scalable Fullstack Application Development that drives results and streamlines
                    operations, as well as cutting-edge Cloud Architecture & Development solutions that enhance
                    performance and flexibility. I create visually stunning and user-friendly Web Design & User
                    Experience that captivate and engage audiences, and deliver innovative and compelling Creative
                    Design that stands out and makes an impact. Ready to take your project to the next level? Let&apos;s
                    connect and work together to achieve your goals.
                    &quot;
                </p>
                <div className="flex flex-col items-end justify-center pt-24">
                    <ul className="text-lg space-y-2 md:pr-20">
                        <li>
                            <h2 className="text-3xl sm:text-4xl font-extrabold font-RobotoSerif pb-2">
                                Focusing On:
                            </h2>
                        </li>
                        <li>Fullstack Application Development</li>
                        <li>Cloud Architecture & Development</li>
                        <li>Web Design & User Experience</li>
                        <li>Creative Design</li>
                    </ul>
                </div>
                <div className="font-extrabold text-4xl lg:text-7xl text-center pt-24">
                    <h1 className="pt-36 pl-8 font-RobotoSerif">Let&apos;s Be
                        <a href="#landing" className="text-blue-text underline px-4">Creative</a>
                        Today.
                    </h1>
                </div>
            </div>
        </section>
    );
}