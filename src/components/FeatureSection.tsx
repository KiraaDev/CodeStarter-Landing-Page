import React from 'react'
import FeatureCard from './FeatureCard'
import Fast from '../assets/fast.svg';
import EasyToUse from '../assets/easy.svg';
import Customizable from '../assets/customizable.svg';

function FeatureSection() {
    return (
        <div className="py-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8 dark:text-[#FAFAFA]">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                    logo={EasyToUse}
                        featureName='Easy to Use'
                        description='Our platform is designed to be intuitive and user-friendly, so you can get started right away.'
                    />
                    <FeatureCard
                    logo={Fast}
                        featureName='Fast Performance'
                        description='Experience lightning-fast performance with our optimized infrastructure.'
                    />
                    <FeatureCard
                    logo={Customizable}
                        featureName='Customizable'
                        description='Tailor the platform to your needs with customizable features and settings.'
                    />
                </div>
            </div>
        </div>
    )
}

export default FeatureSection
