import CardsContainer from "./CardsContainer"

const About = () => {

    return (
        <section className="flex flex-col w-full gap-4">
            <div className="flex flex-col items-center font-poppins text-white">
                <h1 className="text-[24px] font-bold">What do we do?</h1>
                <p className="text-[14px] text-center max-w-[252px]">We allow you to track your investments in a visual and effective way, to help you keep track of your economy.</p>
            </div>
            <div className="w-full flex justify-center">
                <CardsContainer />
            </div>
        </section>
    )
}

export default About