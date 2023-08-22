import Image from "next/image";

export default function Chat() {
    return (
        <section className="">
            <article className="flex">
                <div>
                    <h1 className="pt-40">This is me  👋 </h1>
                    <div className="text-[24px] leading-[46px]">
                        <span className="font-bold text-[#B29CF1]">Chat with me about...<br /></span>
                        🪴 interior design<br />
                        🥁 music making<br />
                        ️🏃‍♀️ ️running<br />
                        ️⛵️ sailing<br />
                        🍿️ Ghibli films<br />
                        ️🎺 where to listen to live jazz (or any kind of live music)<br />
                        ️🧘‍♀️ mindfullness<br />
                        🦋 what gives you butterflies<br />
                    </div>
                </div>
                <Image src="/img/portrait.png" className="z-[1] relative self-end left-24 -top-12" alt="portrait" height={484} width={484} />
            </article>
            <div className="flex flex-wrap gap-6 pt-20">
                {Array(8).fill(1).map((e, i) => <Image key={i} src={`/img/${i}.png`} alt="bild" height={368} width={282} />)}
            </div>
        </section>
    )
}