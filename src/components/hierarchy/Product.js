import AddCart from "./AddCart";
import Rating from "./Rating";

export default function Product() {
    return (
        <div className="w-full xl:h-full relative flex flex-col text-sc-gray-900 bg-white overflow-hidden duration-150 rounded-xl border-2 group hover:border-primary hover:shadow-md">
            <div className="w-full aspect-square gap-1 flex justify-center items-center overflow-hidden">
                <img className="h-full" src="/image/product/apple.png"/>
            </div>
            <div className="w-full flex flex-col xl:flex-1 p-4 gap-1 relative cursor-pointer">
                <div className="h-3/4 w-full flex flex-col justify-center items-start">
                    <p className="sm-400 text-sc-gray-700 group-hover:text-primary">Green Apple</p>
                    <p className="md-500">$14.99</p>
                </div>
                <div className="h-1/4 w-full">
                    <Rating out={4}/>
                </div>
                <div className="w-10 aspect-square absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
                    <AddCart/>
                </div>
            </div>
            <div className="w-10 absolute right-4 top-4">
                <div className="w-full flex justify-center items-end flex-col gap-2">
                    <div className="w-full aspect-square rounded-full border hover:border-primary cursor-pointer duration-150 flex justify-center items-center p-2">
                        <img src="/icons/heart.svg" alt="heart" />
                    </div>
                    <div className="w-full aspect-square rounded-full border hover:border-primary cursor-pointer duration-150 flex justify-center items-center p-2">
                        <img src="/icons/eye.svg" alt="heart" />
                    </div>
                </div>
            </div>
        </div>
    );
}