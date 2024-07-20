import { ProductShowcase } from "@/components/projectShowcase";

export default function Projects() {
    return(
        <section className="pt-52" id="projects">
            <div className="pl-12">
                <h1 className="text-4xl sm:text-7xl font-RobotoSerif font-extrabold">
                    Projects
                </h1>
                <div className="relative">
                    <div className="absolute border-t-4 left-20 sm:left-36 border-black" style={{width: '100%'}}></div>
                </div>
                <div>
                    <ProductShowcase />
                </div>
                <div className="text-center flex flex-col pt-52">
                    <h2 className="font-extrabold text-3xl pb-4">
                        Experience the ultimate design revolution.
                    </h2>
                    <p className="px-32">
                        Simplify your journey and elevate your business to new heights. <br/> Myself, along the
                        <span> Pathscreative </span> team, are here to help you achieve your goals and realize your vision.
                    </p>
                    <ul className="pt-8 grid grid-cols-1 sm:grid-cols-4 font-RobotoSerif text-lg gap-2">
                        <li>Brand Website</li>
                        <li>Interactive Websites</li>
                        <li>Event Website</li>
                        <li>SAAS</li>
                        <li>Portfolio</li>
                        <li>Mobile Apps</li>
                        <li>E-commerce Platforms</li>
                        <li>Landing Pages</li>
                        <li>API Integration</li>
                        <li>SEO Optimization</li>
                        <li>Enterprise Solutions</li>
                        <li className="text-blue-text underline"><a>Launchstar CMS</a></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}