import React from "react"
import samplebg from '../assets/imgs/bg.jpg';

const TechStackBadge: React.FC<{ name: string }> = ({ name }) => {

    return (
        <span
            className="px-4 py-2 bg-white bg-opacity-50 rounded-lg text-gray-700 font-semibold shadow-xs shadow-blue-600 hover:shadow-md transition-shadow duration-300 cursor-pointer"
        >
            {name}
        </span>
    )
}
function AboutSection() {

    const techs = ["React", "Next.js", "TypeScript", "Tailwind CSS"]
    return (
        <section className="py-24 bg-gradient-to-br" id="about">
            <div className="container mx-auto px-4">
                <div className="relative">

                    <div className="relative flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 lg:pr-16 mb-12 lg:mb-0 z-10">
                            <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-6 leading-tight">
                                Accelerate Your
                                <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-900 to-slate-900">
                                    {" "}
                                    Development{" "}
                                </span>
                                Workflow
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Discover a treasure trove of reusable code templates and components. Our platform empowers developers to build faster, smarter, and more efficiently.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                {techs.map((tech, index) => (
                                    <TechStackBadge key={index} name={tech}  />
                                ))}
                            </div>
                            rw

                        </div>
                        <div className="w-2/4 lg:w-1/2 z-10">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-gray-400 transform -rotate-6 rounded-2xl"></div>
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={samplebg}
                                        alt="Our Vision"
                                        width={800}
                                        height={600}
                                        className="w-full h-auto transform bg-gray-100 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
