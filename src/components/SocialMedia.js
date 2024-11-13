export default function SocialMedia({type}) {
    let typeIcon = 'link'

    if (type) {
        typeIcon = type
    }

    return (
        <button className="w-10 aspect-square rounded-full hover:bg-primary duration-150">
            <img className="w-full" src={`/icons/social-media-${typeIcon}.svg`}/>
        </button>
    );
}