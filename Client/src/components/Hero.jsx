import { hand } from "../assets"
import MemberButton from "./MemberButton"
import useIsMobile from "../hooks/useIsMobile"

const Hero = () => {
    const isMobile = useIsMobile()

    return (
        <section className="w-full h-full flex flex-col md:flex-row lg:gap-12 justify-center items-center font-poppins mt-8">
            <div className="max-w-[1440px]">

                <div>
                    <div className="w-full flex justify-center">
                        <h1
                            className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[64px] text-center md:text-start text-white font-bold max-w-[240px] md:max-w-[500px] lg:max-w-[705px]"
                        >
                            Track Your Investments, <br className="hidden md:flex" />Amplify Your Profits.
                        </h1>
                    </div>
                    <p
                        className="text-white text-center md:text-start max-w-[240px] sm:max-w-[320px] lg:max-w-[705px] mt-4 font-light text-[14px] sm:text-[16px] lg:text-[24px]"
                    >
                        All Your Investments, One Dashboard. Make smarter decisions with real-time market data and analytics.
                    </p>
                    {isMobile && (
                        <div className="flex justify-center mt-10">
                            <img src={hand}
                                alt="A hand holding a Bitcoin."
                                className="w-[160px] h-auto"
                            />
                        </div>
                    )}
                    <div
                        className="flex flex-col items-center md:items-start mt-10"
                    >
                        <div className="text-center flex flex-col gap-2">
                            <h4 className="text-[14px] font-poppins font-light text-white opacity-[0.5] mb-1">Change your economy today!</h4>
                            <MemberButton text="Become a member" />
                        </div>
                    </div>

                </div>

            </div>
            {!isMobile && (
                <div
                    className="flex justify-end"
                >
                    <img src={hand}
                        alt="A hand holding a Bitcoin."
                        className="w-[340px] h-auto"
                    />
                </div>
            )}
        </section>
    )
}

export default Hero