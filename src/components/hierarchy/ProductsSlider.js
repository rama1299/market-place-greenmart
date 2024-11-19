import { useEffect, useState, useRef } from "react";
import Product from "./Product";

export default function ProductsSlider({ data }) {
    const [widthProduct, setWidthProduct] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.getBoundingClientRect().width;

                if (window.innerWidth > 1024) {
                    setWidthProduct(containerWidth / 4); // 4 produk
                } else if (window.innerWidth > 768) {
                    setWidthProduct(containerWidth / 3); // 3 produk
                } else if (window.innerWidth > 425) {
                    setWidthProduct(containerWidth / 2); // 2 produk
                } else {
                    setWidthProduct(containerWidth); // 1 produk
                }
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full xl:max-h-[400px]" ref={containerRef}>
            <div className="w-full h-full flex overflow-x-auto scroll-smooth">
                <div className={`w-[${widthProduct}px] h-full`}>
                    <Product/>
                </div>
                <div className={`w-[${widthProduct}px] h-full`}>
                    <Product/>
                </div>                
                <div className={`w-[${widthProduct}px] h-full`}>
                    <Product/>
                </div>                
                <div className={`w-[${widthProduct}px] h-full`}>
                    <Product/>
                </div>
            </div>
        </div>
    );
}