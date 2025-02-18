

function HeroSection() {

    return (
        <section className="relative w-full z-0 h-[70svh] flex justify-center items-center flex-col gap-10 rounded-md bg-gradient-to-t overflow-hidden md:h-[70svh] ">
            <div
                className="absolute h-full -z-10 w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            ></div>
            <div className="lg:w-2/3 text-center dark:text-white">
                <h1 className="text-balance text-5xl md:text-6xl xl:text-7xl">Build <strong>Faster</strong> with
                    Ready-to-Use <strong>Templates</strong>
                </h1>
                <p className="mt-8 text-gray-700 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt autem cupiditate nostrum suscipit accusamus consequatur blanditiis saepe nemo eius omnis! Totam reiciendis</p>
            </div>
            <div className="flex gap-5">
                <button className="cursor-pointer bg-blue-700 hover:bg-blue-800 text-md font-bold transition-all duration-200 px-5 py-2 rounded-full dark:bg-blue-900 border border-transparent flex items-center hover:dark:bg-blue-950 active:scale-95">
                    <span className="text-white">Learn More</span>
                </button>
                <button className="cursor-pointer text-blue-700 border-blue-700 hover:border-blue-900 text-md font-bold transition-all duration-200 px-5 py-2 rounded-full border  flex items-center active:scale-95">
                    <span className="">View Templates</span>
                </button>
            </div>

        </section>
    )
}

export default HeroSection
