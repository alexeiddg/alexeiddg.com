import Landing from '../containers/landing/landing';
import About from '../containers/about/about';

export default function Home() {
    return (
        <div className="bg-background overflow-hidden">
            <Landing />
            <About />
        </div>
    );
}