
export default function Base({ children }: any) {
    return (
        <div className="flex items-center justify-center">
            <div className="relative w-[1440px] px-[120px] overflow-hidden">{children}</div>
        </div>
    )
}