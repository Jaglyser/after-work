import Image from "next/image";

export default function Envelope({ className }: any) {
    return <Image src='/svgs/envelope.svg' className={className} height={48} width={48} alt='footer' />
}