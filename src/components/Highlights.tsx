import HighlightCard from "./HighlightCard"

function Highlights() {
    return (
        <section className="flex justify-center items-center min-h-[60svh] flex-col gap-10 mt-10">
            <h1 className="text-center font-semibold text-xl">Why Choose Our Templates?</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <HighlightCard
                    title={'s'}
                    description="Customize your experience like never before." />
                <HighlightCard
                    title="Speed"
                    description="Enjoy lightning-fast performance." />
                <HighlightCard
                    title="Loyalty"
                    description="Get rewarded for your commitment." />
            </div>
        </section>
    )
}

export default Highlights
