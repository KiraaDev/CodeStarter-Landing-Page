
interface HighlightCardProps {
    title: string;
    description: string;
    icon: string
}

const HighlightCard: React.FC<HighlightCardProps> = ({ title, description, icon }) => {
    return (
        <div className="border rounded-lg shadow-lg h-55 flex flex-col justify-center relative">
            <div className="h-14 absolute w-20 mt-1 flex justify-center top-0 left-0">
                <img src={icon} alt="" className='h-full' />
            </div>
            <div className="p-10">
                <h3 className="text-xl font-bold">{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default HighlightCard