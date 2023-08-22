import Image from "next/image";

export default function FooterShape({ className }: any) {
    return <Image src='/svgs/footer.svg' className={className} height={344} width={1440} alt='footer' />
}