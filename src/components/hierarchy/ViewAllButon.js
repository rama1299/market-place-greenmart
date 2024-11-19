export default function ViewAllButton({fontSize}) {
    const textSize = fontSize || 'md-500'
    return (
        <div className="flex justify-center items-center gap-3 cursor-pointer">
            <p className={`${textSize} text-primary`}> View All</p>
            <img src="/icons/arrowrightgreen.svg"/>
        </div>
    );
}