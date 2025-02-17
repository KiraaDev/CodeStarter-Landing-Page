import { useState } from "react";
import { MenuLinks } from "../config/menu";

function Header() {
    const [navLinks, setNavLinks] = useState<boolean>(false);

    const toggleNavLinks = () => {
        setNavLinks(!navLinks);
    };

    return (
        <header>
            <nav id="nav" data-state={navLinks ? "active" : ""} className="fixed z-20 group bg-white w-full border-b border-black/5 dark:bg-gray-950 dark:border-white/5 lg:border-transparent">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
                        <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-fit">
                            <a href="/#home" aria-label="logo" className="flex items-center space-x-2">
                                <span className="text-2xl font-medium text-gray-900 dark:text-white">Cod<span className="font-medium scale-x-[-1] inline-block">e</span>Start<span className=" scale-x-[-1] inline-block">e</span>r</span>
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

                          
                            <button className="cursor-pointer text-sm font-bold transition-all duration-200 px-4 py-2 rounded-full bg-blue-700 hover:bg-blue-800  border border-transparent flex items-center dark:bg-blue-900  hover:dark:bg-blue-950 active:scale-95 mt-0 group-data-[state=active]:mt-10">
                                <span className="text-white">Get Started</span>
                                <svg
                                    width="27"
                                    height="27"
                                    viewBox="0 0 74 74"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-8 ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                                >
                                    <circle cx="37" cy="37" r="35.5" stroke="white" strokeWidth="3" />
                                    <path
                                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
