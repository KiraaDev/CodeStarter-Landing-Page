import React from 'react'

interface FeatureCardProps {
    featureName: string;
    description: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ featureName, description }) => {

    return (
        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-900 ">
            <div className="flex justify-center">
                <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
            </div>
            <h3 className="text-xl font-semibold mt-4 dark:text-[#FAFAFA]">{featureName}</h3>
            <p className="text-gray-600 mt-2 dark:text-[#FAFAFA]">
               {description}
            </p>
        </div>
    )
}

export default FeatureCard
