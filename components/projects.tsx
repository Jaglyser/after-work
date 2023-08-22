import Image from "next/image"
import { ButtonSecond } from "./base/button"

export default function Projects() {
    const projects = [
        {
            'image': '/img/Apollo.png',
            'label': 'Apollo',
            'description': 'Optimizing user experience on a fitness-focused hotel page',
        },
        {
            'image': '/img/Visma.png',
            'label': 'Visma Recruits',
            'description': 'A redesigned process of creating an ad to deliver a more efficient and user-friendly experience',
        },
    ]
    const Project = ({ image, label, description, idx }: any) => {
        const isEven = idx % 2 == 0
        return (
            <article className="rounded-[20px] flex relative w-[1024px] relative overflow-hidden shadow-[0_6px_64px_0px_#7090B01A]                ">
                {!isEven && <Image src={image} alt={label} height={524} width={528} />}
                <div className="bg-white w-[496px] flex flex-col justify-center">
                    <div className="flex flex-col justify-center gap-6 w-[406px] text-[18px] mx-auto">
                        <h2>{label}</h2>
                        <p>{description}</p>
                        <ButtonSecond>View Project</ButtonSecond>
                    </div>
                </div>

                {isEven && <Image src={image} alt={label} height={524} width={528} />}
            </article>
        )
    }
    return (
        <section className="flex flex-col items-center gap-20">
            {projects.map((project, i) => <Project key={i} {...project} idx={i} />)}
        </section>
    )
}