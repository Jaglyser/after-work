import Envelope from "./svgs/envelope";
import FooterShape from "./svgs/footer-shape";
import Linkedin from "./svgs/linkedin";

export default function Footer() {
    const date = new Date().getFullYear()
    return (
        <div className="flex justify-center relative pt-40">
            <section className="flex flex-col gap-4 items-center w-[1440px]">
                <article className="flex gap-4">
                    <Linkedin />
                    <Envelope />
                </article>
                <article className="">
                    <p>Matilda Usterud {date}</p>
                </article>
                <FooterShape className="absolute -z-1 top-40" />
            </section>
        </div>
    )
}