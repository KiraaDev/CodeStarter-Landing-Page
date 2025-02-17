import { useState } from "react";
import { MenuLinks } from "../config/menu";

function Header() {
    const [navLinks, setNavLinks] = useState<boolean>(false);

    const toggleNavLinks = () => {
        setNavLinks(!navLinks);
    };

    return (
        <header>
            <nav id="nav" data-state={navLinks ? "active" : ""} className="absolute group z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
                        <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit">
                            <a href="/#home" aria-label="logo" className="flex items-center space-x-2">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">CodeStarter</span>
                            </a>

                            <div className="relative flex max-h-10 items-center lg:hidden">
                                <button
                                    onClick={toggleNavLinks}
                                    aria-label="Toggle navigation"
                                    aria-expanded={navLinks}
                                    className="relative p-6 -mr-6 transition-transform duration-300 active:scale-95 focus:outline-none"
                                >
                                    <span
                                        className={`block m-auto h-0.5 w-5 rounded bg-gray-950 dark:bg-white transition-transform duration-300 
                                         ${navLinks ? "rotate-45 translate-y-1.5" : "origin-top"}`}
                                    ></span>
                                    <span
                                        className={`block m-auto mt-2 h-0.5 w-5 rounded bg-gray-950 dark:bg-white transition-transform duration-300 
                                            ${navLinks ? "-rotate-45 -translate-y-1" : "origin-bottom"}`}
                                    ></span>
                                </button>
                            </div>

                        </div>
                        <div id="navLayer" aria-hidden="true" className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 group-data-[state=active]:origin-top group-data-[state=active]:scale-y-100 dark:bg-gray-950/70 lg:hidden"></div>

                        <div id="navlinks" className={"absolute top-full left-0 z-50 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-fit lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent group-data-[state=active]:visible group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 lg:group-data-[state=active]:translate-y-0"}>
                            <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                                <div id="links-group" className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                                    {
                                        MenuLinks.map((link, index) => (
                                            <a key={index} href={link.path} className="hover:text-primary block transition dark:hover:text-white md:px-4">
                                                <span>{link.name}</span>
                                            </a>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="mt-12 lg:mt-0">
                                <a href="/register" className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                    <span className="relative text-sm font-semibold text-white"> Get Started</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
