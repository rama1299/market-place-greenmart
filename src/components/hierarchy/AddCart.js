export default function AddCart() {
    return (
        <div className="w-full h-full group">
            <div className="w-full h-full flex justify-center items-center bg-sc-gray-50 duration-150 group-hover:bg-primary rounded-full">
                <img className="duration-150 group-hover:hidden block" src="/icons/bag-black.svg" alt="cart" />
                <img className="duration-150 group-hover:block hidden" src="/icons/bag-white.svg" alt="cart" />
            </div>
        </div>
    );
}