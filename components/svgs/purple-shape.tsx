import Image from "next/image";

export default function PurpleShape({ className }: any) {
    return <Image src='/svgs/top_blob.svg' className={`${className} -top-28 !-right-20`} height={777} width={740} alt='background' />
}