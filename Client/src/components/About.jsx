import CardsContainer from "./CardsContainer"
import GraphCard from "./Cards/GraphCard"

const About = () => {

    return (
        <section className="flex flex-col w-full gap-8 items-center relative h-full">
            <div className="flex flex-col items-center font-poppins text-white">
                <h1 className="text-[24px] sm:text-[42px] lg:text-[64px] font-bold mt-4">What do we do?</h1>
                <p className="text-[14px] sm:text-[18px] lg:text-[24px] text-center">We allow you to track your investments in a visual <br />and effective way, to help you keep track of your economy.</p>
            </div>
            <div className="w-full flex relative items-center justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[350px] lg:min-h-[400px]">
                <CardsContainer />
            </div>
            <div className="w-full flex flex-col items-center">
                <p className="text-[14px] sm:text-[18px] lg:text-[24px] text-center text-white">Keep track of your portfolio over time with<br /> custom values allowed.</p>
                <GraphCard />
            </div>
        </section>

    )
}

export default About