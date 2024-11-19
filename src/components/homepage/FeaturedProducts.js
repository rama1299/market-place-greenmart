import ProductsSlider from "../hierarchy/ProductsSlider";
import ViewAllButton from "../hierarchy/ViewAllButon";

export default function FeaturedProducts({}) {
    return (
        <>
            <div className="wrap m-auto space-y-4 relative">
                <div className="w-full flex justify-between items-center">
                    <p className="h3-600">Featured Products</p>
                    <div>
                        <ViewAllButton/>
                    </div>
                </div>
                <ProductsSlider/>
            </div>
        </>
    );
}