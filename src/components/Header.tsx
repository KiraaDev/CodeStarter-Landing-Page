import { useState } from "react";

function Header() {
    const [sidebar, setSidebar] = useState<boolean>(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    return (
        <header className="flex justify-around items-center h-[10svh] bg-white fixed w-full top-0 left-0 z-10">
            <div className="md:hidden">
                <button className="flex flex-col gap-1 items-center cursor-pointer" onClick={toggleSidebar}>
                    <span className="block w-6 h-1 bg-gray-800"></span>
                    <span className="block w-6 h-1 bg-gray-800"></span>
                    <span className="block w-6 h-1 bg-gray-800"></span>
                </button>
            </div>
            <h1 className="text-sm font-semibold">CodeStarter</h1>
            <ul className="hidden text-sm gap-10 md:flex">
                <li><a href="">About</a></li>
                <li><a href="">Solutions</a></li>
                <li><a href="">Resources</a></li>
                <li><a href="">Pricing</a></li>
            </ul>
            <div>
                <button className="text-xs rounded-full border-1 p-2 px-4 cursor-pointer">Get Started</button>
            </div>

            {/* Sidebar */}
            <ul
                className={`${sidebar ? "flex md:hidden" : "hidden"
                    } flex-col w-60 bg-gradient-to-b from-white to-blue-100 h-screen absolute top-0 left-0 z-20 p-6 space-y-6 transition-all duration-300 ease-in-out`}
            >

                <li className="flex justify-center gap-10 items-center">
                    <h2 className="text-xl font-bold text-gray-800">CodeStarter</h2>
                    <button className="flex flex-col gap-1 items-center cursor-pointer" onClick={toggleSidebar}>
                        <span className="block w-6 h-1 bg-gray-800"></span>
                        <span className="block w-6 h-1 bg-gray-800"></span>
                        <span className="block w-6 h-1 bg-gray-800"></span>
                    </button>
                </li>

                {/* Sidebar Links */}
                <li>
                    <a
                        href=""
                        className="text-lg text-gray-700 hover:text-white hover:bg-amber-600 p-2 rounded-md transition duration-200"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href=""
                        className="text-lg text-gray-700 hover:text-white hover:bg-amber-600 p-2 rounded-md transition duration-200"
                    >
                        Solutions
                    </a>
                </li>
                <li>
                    <a
                        href=""
                        className="text-lg text-gray-700 hover:text-white hover:bg-amber-600 p-2 rounded-md transition duration-200"
                    >
                        Resources
                    </a>
                </li>
                <li>
                    <a
                        href=""
                        className="text-lg text-gray-700 hover:text-white hover:bg-amber-600 p-2 rounded-md transition duration-200"
                    >
                        Pricing
                    </a>
                </li>

                {/* Footer / Close Button */}
                <li className="flex justify-center mt-8">
                    <button
                        onClick={toggleSidebar}
                        className="text-lg text-gray-700 hover:text-white hover:bg-amber-600 p-2 rounded-md transition duration-200"
                    >
                        Close
                    </button>
                </li>
            </ul>

        </header>
    );
}

export default Header;
