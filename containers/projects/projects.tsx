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
            </div>
        </section>
    );
}