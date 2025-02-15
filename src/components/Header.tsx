

function Header() {

    return (
        <header className="flex justify-around items-center h-[10svh] bg-white fixed w-full top-0 left-0 z-10">
            <h1 className="text-sm font-semibold">CodeStarter</h1>
            <ul className="hidden gap-10 md:flex">
                <li><a href="">About</a></li>
                <li><a href="">Solutions</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">Pricing</a></li>
            </ul>
            <div>
                <button className="text-xs rounded-full border-1 p-2 px-4 cursor-pointer">Get Started</button>
            </div>
            <div className=" md:hidden">
                <button className="flex flex-col gap-1 items-center cursor-pointer">
                    <span className="block w-6 h-1 bg-gray-800"></span>
                    <span className="block w-6 h-1 bg-gray-800"></span>
                    <span className="block w-6 h-1 bg-gray-800"></span>
                </button>
            </div>
        </header>
    )
}

export default Header
