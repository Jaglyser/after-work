import Image from "next/image";

export default function PurpleShape({ className }: any) {
    return <Image src='/svgs/yellow-bg.svg' className={className} height={720} width={640} alt='background' />
}