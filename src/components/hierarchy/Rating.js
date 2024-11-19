export default function Rating({ out, of }) {
    const starActive = out || 0;
    const starInactive = of || 5;

    return (
        <div className="w-full h-full">
            <div className="w-full h-full flex justify-start items-center">
                {Array.from({ length: starInactive }).map((_, i) => (
                    <img
                        key={i}
                        className="h-full"
                        src={i < starActive ? '/icons/starActive.svg' : '/icons/starInactive.svg'}
                        alt={`Star ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
