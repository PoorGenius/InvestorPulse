import { hand } from "../assets"
import MemberButton from "./MemberButton"

const Hero = () => {
    return (
        <section className="w-full h-full flex flex-col items-center font-poppins mt-8">
            <h1
                className="text-[24px] text-center text-white font-bold max-w-[240px]"
            >
                Track Your Investments, Amplify Your Profits.
            </h1>
            <p
                className="text-white text-center max-w-[240px] mt-4 font-light text-[14px]"
            >
                All Your Investments, One Dashboard. Make smarter decisions with real-time market data and analytics.
            </p>

            <img src={hand}
                alt="A hand holding a Bitcoin."
                className="w-[140px] h-auto mt-4"
            />

            <div
                className="flex flex-col items-center mt-14 gap-2"
            >
                <h4 className="text-[14px] font-poppins font-light text-white opacity-[0.5] mb-1">Change your economy today!</h4>
                <MemberButton text="Become a member" />
            </div>
        </section>
    )
}

export default Hero