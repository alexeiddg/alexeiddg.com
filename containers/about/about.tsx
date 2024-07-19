export default function About() {
    return (
        <section className="bg-background pt-52 flex flex-col sm:flex-row">
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
                        <li>Pathscreative <br/></li>
                        <li><a className="underline">LinkedIn</a><br/></li>
                        <li><a className="underline text-blue-text">becreative@alexeiddg.com</a><br/></li>
                        <li><a className="underline">CV</a><br/></li>
                    </ul>
                </div>
                <div className="pl-12 pt-12 sm:pt-72">
                    <p className="font-light text-sm">&copy Alexei Delgado &copy; 2024</p>
                </div>
            </div>
            <div className="relative flex items-stretch">
                <div className="absolute inset-y-0 left-12 w-1 bg-black"></div>
            </div>
            <div className="flex flex-col px-12 sm:flex-1   ">
                <h2 className="px-16 font-extrabold text-4xl">About Me:</h2>
                <p className="px-16 pt-4 sm:text-base">
                    &quot;
                    After 15 years of experience in digital craft and guiding UX & UI
                    teams within the digital design scene I&apos;m now focused on sharing
                    my knowledge with you. My focus is helping companies to champion
                    their work, optimise design departments and leap what’s next. I&apos;m here to raise the bar,
                    help you outclass the competition and compliment each other to get the most out of your
                    design departments and organisation.
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
                <div className="font-extrabold text-4xl lg:text-7xl text-center py-24">
                    <h1 className="pt-36 pl-8 font-RobotoSerif">Let&apos;s Be
                        <span className="text-blue-text underline px-4">Creative</span>
                        Today.
                    </h1>
                </div>
            </div>
        </section>
    );
}