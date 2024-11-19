export default function Feature() {
    return (
        <>
        <div className="wrap grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 lg:gap-6 m-auto sm:border-b-2 text-center gap-7">
            <div className="w-full flex flex-col justify-center items-center gap-2 lg:gap-4 col-span-3 pb-5">
                <div className="w-[4rem] lg:w-[5rem]">
                <img src="/icons/shipping.svg"/>
                </div>
                <p className="md-600 lg:lg-600">Free Shipping</p>
                <p className="xs-400 lg:sm-400 text-sc-gray-400">Free shipping with discount</p>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2 lg:gap-4 col-span-3 pb-5">
                <div className="w-[4rem] lg:w-[5rem]">
                <img src="/icons/support.svg"/>
                </div>
                <p className="md-600 lg:lg-600">Great Support 24/7</p>
                <p className="xs-400 lg:sm-400 text-sc-gray-400">Instant access to Contact</p>
            </div>        
            <div className="w-full flex flex-col justify-center items-center gap-2 lg:gap-4 col-span-3 pb-5 sm:border-b-4 sm:border-primary">
                <div className="w-[4rem] lg:w-[5rem]">
                <img src="/icons/secure.svg"/>
                </div>
                <p className="md-600 lg:lg-600">100% Secure Payment</p>
                <p className="xs-400 lg:sm-400 text-sc-gray-400">We ensure your money is save</p>
            </div>          
            <div className="w-full flex flex-col justify-center items-center gap-2 lg:gap-4 col-span-3 pb-5">
                <div className="w-[4rem] lg:w-[5rem]">
                <img src="/icons/guarantee.svg"/>
                </div>
                <p className="md-600 lg:lg-600">Money-Back Guarantee</p>
                <p className="xs-400 lg:sm-400 text-sc-gray-400">30 days money-back</p>
            </div>
        </div>
        </>
    );
}