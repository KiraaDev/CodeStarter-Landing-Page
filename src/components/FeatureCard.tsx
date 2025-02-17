import React from 'react'

interface FeatureCardProps {
    logo: string;
    featureName: string;
    description: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ logo, featureName, description }) => {

    return (
        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900 ">
            <div className="flex justify-center">
               <img src={logo} alt="feature logo" className="w-12 h-12 " />
            </div>
            <h3 className="text-xl font-semibold mt-4 dark:text-[#FAFAFA]">{featureName}</h3>
            <p className="text-gray-600 mt-2 dark:text-[#FAFAFA]">
               {description}
            </p>
        </div>
    )
}

export default FeatureCard
