

function HeroSection() {

    return (
        <section className="relative w-full h-[65svh] flex justify-center items-center flex-col gap-10 rounded-md bg-gradient-to-t from-[#4a8dcbb6] to-[#fafafa]  overflow-hidden md:h-[70svh] ">
            <div
                className="absolute h-full -z-0 w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
            ></div>
            <h1 className="text-3xl z-0 text-center md:text-5xl">Build <strong>Faster</strong> with <br />
                Ready-to-Use <strong>Templates</strong>
            </h1>
            <div className=" shadow-2xl rounded-md h-60 w-[60%] absolute bottom-[-10px]">

            </div>
        </section>
    )
}

export default HeroSection
