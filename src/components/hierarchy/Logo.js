export default function Logo({ fontSize, color }) {
    const textSize = fontSize ? fontSize : 'h5-400';
    const textColor = color ? `text-${color}` : 'text-sc-gray-900';

    return (
        <div className={`${textSize} ${textColor} font-medium flex justify-center items-center gap-1 cursor-pointer leading-none`}>
            <img src="/plant-1.svg" className="w-[1.5rem]" alt="Greenmart Logo" />
            <p>Greenmart</p>
        </div>
    );
}
