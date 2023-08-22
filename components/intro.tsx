import { ButtonPrimary, ButtonSecond } from "./base/button";
import PurpleShape from "./svgs/purple-shape";

export default function Intro() {
    return (
        <section className="h-[660px] flex flex-col flex-wrap justify-center gap-12">
            <article>
                <p className="text-[#878787]">Hello there!</p>
                <h1>I&apos;m Matilda,<br />a UX Designer</h1>
            </article>
            <article className="flex gap-4">
                <ButtonPrimary>Project</ButtonPrimary>
                <ButtonSecond>About me</ButtonSecond>
            </article>
        </section>
    )
}