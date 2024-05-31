import { BentoGrid } from "@/components/ui/bento-grid";
import { BentoGridItem } from "@/components/ui/bento-grid";

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {[{
                    title: "Title1",
                    description: "Description1",
                }].map((item, i) => (
                    <BentoGridItem>

                    </BentoGridItem>
                ))}
            </BentoGrid>
        </section>
    )
}