import Landing from '@/containers/landing/landing';
import Projects from "@/containers/projects/projects";
import About from '@/containers/about/about';

export default function Home() {
    return (
        <div className="bg-background overflow-hidden cursor-crosshair">
            <Landing />
            <Projects />
            <About />
        </div>
    );
}