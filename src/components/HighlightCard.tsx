
interface HighlightCardProps {
    title: string;
    description: string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({ title, description }) => {
    return (
        <div className="p-6 border rounded-lg shadow-lg h-48">
            <h3 className="text-xl font-bold">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default HighlightCard