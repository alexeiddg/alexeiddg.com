

export default function Landing() {
    return (
        <section className="bg-background w-full h-full">
            <div className="flex flex-col sm:flex-row justify-center sm:justify-between pt-12">
                <p className="p-24">
                    &quot;
                    Transforming Ideas into Digital Excellence: <br/>
                    From Stunning Web Design and Single Page Applications <br/>
                    to Robust Enterprise Solutions, <br/>
                    I Deliver Fullstack Innovations Tailored to Your Business Needs.
                    &quot;
                </p>
                <h2 className="pl-24 pt-0 sm:pr-24 sm:pt-36">
                    <a
                        href=""
                        className="underline text-xl sm:text-3xl font-bold "
                    >
                        projects
                    </a>
                </h2>
            </div>
            {/* Section */}
            <div className="flex flex-col flex-grow pt-8 pb-8 items-center justify-center">
                <div className="pb-16 relative">
                    <h1 className="font-bold text-4xl sm:text-7xl pb-2">
                        Alexeiddg
                    </h1>
                    <svg className="absolute z-0 hidden sm:block" width="529.85" height="203.89" viewBox="0 0 529.85 203.89"
                         xmlns="http://www.w3.org/2000/svg"
                         style={{transform: 'rotate(344deg)', top: '-58%', left: '-30%', transformOrigin: 'center'}}>
                        <ellipse cx="264.925" cy="101.945" rx="210" ry="90" stroke="blue" fill="none"
                                 strokeWidth="3"/>
                    </svg>
                </div>
                <p className="pb-2 flex flex-col sm:flex-row">
                    fullstack application developer /
                    <span className="flex underline justify-center items-center">
                        web designer
                    </span>
                    / Cloud Architecture & Development
                </p>
                <a className="underline">
                    becreative@alexeiddg.com
                </a>
                <h1 className="font-bold text-4xl sm:text-7xl pt-4">
                    For <span className="ml-2">Pathscreative </span>
                </h1>
            </div>
            {/* Section */}
            <div className="flex flex-col">
                <h2 className="pl-12 sm:pl-36 pt-8">
                    <a
                        href=""
                        className="underline text-xl sm:text-3xl font-bold"
                    >
                        about
                    </a>
                </h2>
            </div>
            {/* Section */}
            <div className="flex flex-col items-end justify-end">
                <h2 className="pt-8 pr-12 sm:pr-28">
                    <a
                        href=""
                        className="underline text-xl sm:text-3xl font-bold"
                    >
                        contact
                    </a>
                </h2>
            </div>
            {/* Section */}
            <div className="flex flex-col items-center justify-center pt-12">
                <p className="text-blue-text font-semibold text-lg">
                    Be creative today
                </p>
                <div className="py-4">
                    <a href="">
                        <svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1"
                             xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 242.133 242.133" xmlSpace="preserve">
                            <path id="XMLID_26_" d="M15,242.133h80.066c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15H51.213L237.739,25.606
                        c5.858-5.857,5.858-15.355,0-21.213c-5.857-5.857-15.355-5.857-21.213,0L30,190.92v-69.854c0-8.284-6.716-15-15-15s-15,6.716-15,15
                        v106.066C0,235.417,6.716,242.133,15,242.133z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
