export default function Header() {
    return (
        <div className="fixed w-full z-[99] flex justify-center">
            <nav className="flex justify-between text-black text-[18px] py-4 px-[120px] w-full max-w-[1440px]">
                <p>Matilda Usterud</p>
                <ul className="flex gap-8">
                    <li>Project</li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
    )
}