

function HeroSection() {

    return (
        <section className="relative w-full z-0 h-[65svh] flex justify-center items-center flex-col gap-10 rounded-md bg-gradient-to-t overflow-hidden md:h-[70svh] ">
            <div
                className="absolute h-full -z-10 w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            ></div>
            <div className="lg:w-2/3 text-center text-white">
                <h1 className="text-balance text-5xl md:text-6xl xl:text-7xl">Build <strong>Faster</strong> with
                    Ready-to-Use <strong>Templates</strong>
                </h1>
                <p className="mt-8 text-gray-700 dark:text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt autem cupiditate nostrum suscipit accusamus consequatur blanditiis saepe nemo eius omnis! Totam reiciendis</p>
            </div>

    
        </section>
    )
}

export default HeroSection
