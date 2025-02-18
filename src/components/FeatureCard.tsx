import React from 'react'

interface FeatureCardProps {
    logo: string;
    featureName: string;
    description: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ logo, featureName, description }) => {

    return (
        <div className="p-10 bg-[#f6f6f6] rounded-lg hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900">
            <div className="flex">
               <img src={logo} alt={featureName} className=" h-15 p-2  rounded-xl bg-white " />
            </div>
            <h3 className="text-xl font-semibold mt-4 dark:text-[#fafafae5]">{featureName}</h3>
            <p className="text-gray-600 mt-2 dark:text-[#c9c9c9]">
               {description}
            </p>
        </div>
    )
}

export default FeatureCard
