import HighlightCard from "./HighlightCard"
import speed from '../assets/imgs/speed.png'
import personalization from '../assets/imgs/personalization.png'
import innovation from '../assets/imgs/innovation.png'

function Highlights() {
    return (
        <section className="flex justify-center items-center min-h-[60svh] flex-col gap-10 mt-10">
            <h1 className="text-center font-mono text-xl">Why Choose Our <span className="font-semibold">Templates?</span></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <HighlightCard
                    title={'Personalization'}
                    description="Customize your experience like never before."
                    icon={personalization} />
                <HighlightCard
                    title="Speed"
                    description="Enjoy lightning-fast performance."
                    icon={speed} />
                <HighlightCard
                    title="Innovation"
                    description="Stay ahead with cutting-edge solutions."
                    icon={innovation} />
            </div>
        </section>
    )
}

export default Highlights
