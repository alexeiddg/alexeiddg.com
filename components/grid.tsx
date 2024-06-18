import { BentoGrid } from "@/components/ui/bento-grid";
import { BentoGridItem } from "@/components/ui/bento-grid";
import { gridItemsData } from "@/const/grid-itemsData";

const Grid = () => {
    return (
        <section id='about'>
            <BentoGrid>
                {gridItemsData.map(({ id,
                                    title,
                                    description,
                                    className,
                                    imgClassName,
                                    titleClassName,
                                    img,
                                    spareImg
                                }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        spareImg={spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}

export default Grid;
