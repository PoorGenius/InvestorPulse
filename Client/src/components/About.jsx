import CardsContainer from "./CardsContainer"

const About = () => {

    return (
        <section className="flex flex-col w-full gap-4 items-center relative h-full">
            <div className="flex flex-col items-center font-poppins text-white">
                <h1 className="text-[24px] sm:text-[42px] lg:text-[64px] font-bold mt-4">What do we do?</h1>
                <p className="text-[14px] sm:text-[18px] lg:text-[24px] text-center">We allow you to track your investments in a visual <br />and effective way, to help you keep track of your economy.</p>
            </div>
            <div className="w-full flex justify-center h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px]">
                <CardsContainer />
            </div>
        </section>

    )
}

export default About