import Logo from "../Logo";
import SocialMedia from "../SocialMedia";

export default function Footer() {
    return (
        <footer className="w-full bg-sc-gray-900 bg-[url('/icons/mask-1.svg')] bg-no-repeat">
            <div className="w-full min-h-80 py-8 lg:py-0 flex justify-center items-center">
                <div className="wrap flex flex-wrap gap-8 lg:gap-0 lg:flex-row justify-between items-start">
                    <div className="flex flex-col w-full md:w-auto justify-between items-start gap-3">
                        <Logo color={'white'}/>
                        <div className="text-sc-gray-400 sm-400 max-w-72">
                            <p>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magn.</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <SocialMedia type={'facebook'}/>
                            <SocialMedia type={'twitter'}/>
                            <SocialMedia type={'pinterest'}/>
                            <SocialMedia/>
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-auto justify-between items-start gap-3">
                        <div className="capitalize lg-500 text-white">
                            <p>my account</p>
                        </div>
                        <hr className="w-6 border border-primary"/>
                        <div className="flex flex-col justify-center items-start capitalize gap-2 text-sc-gray-400 sm-400">
                            <p className="cursor-pointer hover:text-white duration-150">my account</p>
                            <p className="cursor-pointer hover:text-white duration-150">order history</p>
                            <p className="cursor-pointer hover:text-white duration-150">shoping cart</p>
                            <p className="cursor-pointer hover:text-white duration-150">wishlist</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-auto justify-between items-start gap-3">
                        <div className="capitalize lg-500 text-white">
                            <p>helps</p>
                        </div>
                        <hr className="w-6 border border-primary"/>
                        <div className="flex flex-col justify-center items-start capitalize gap-2 text-sc-gray-400 sm-400">
                            <p className="cursor-pointer hover:text-white duration-150">contact</p>
                            <p className="cursor-pointer hover:text-white duration-150">faqs</p>
                            <p className="cursor-pointer hover:text-white duration-150">terms & condition</p>
                            <p className="cursor-pointer hover:text-white duration-150">privacy policy</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full sm:w-auto justify-between items-start gap-3">
                        <div className="capitalize lg-500 font-medium text-white">
                            <p>proxy</p>
                        </div>
                        <hr className="w-6 border border-primary"/>
                        <div className="flex flex-col justify-center items-start capitalize gap-2 text-sc-gray-400 sm-400">
                            <p className="cursor-pointer hover:text-white duration-150">about</p>
                            <p className="cursor-pointer hover:text-white duration-150">shop</p>
                            <p className="cursor-pointer hover:text-white duration-150">product</p>
                            <p className="cursor-pointer hover:text-white duration-150">track order</p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full lg:w-auto justify-between items-start gap-3">
                        <div className="capitalize lg-500 font-medium text-white">
                            <p>download mobile app</p>
                        </div>
                        <hr className="w-6 border border-primary"/>
                        <div className="w-full sm:w-80 flex flex-col sm:flex-row justify-between items-start capitalize gap-2 text-sc-gray-400 text-sm">
                            <div className="w-full xs:w-1/2 bg-sc-gray-800 cursor-pointer rounded-sm flex justify-center items-center p-2 gap-2">
                                <img src="/icons/apple.svg"/>
                                <div className="flex flex-col justify-center items-start">
                                    <p className="xs-400">Download on the</p>
                                    <p className="capitalize md-500 text-white">App Store</p>
                                </div>
                            </div>
                            <div className="w-full xs:w-1/2 bg-sc-gray-800 cursor-pointer rounded-sm flex justify-center items-center p-2 gap-2">
                                <img src="/icons/google-play.svg"/>
                                <div className="flex flex-col justify-center items-start">
                                    <p className="xs-400">Download on the</p>
                                    <p className="capitalize md-500 text-white">Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}