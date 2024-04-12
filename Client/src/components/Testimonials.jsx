import { TESTIMONIALS } from "../constants";
import { star, voidstar } from "../assets";

const Card = ({ person }) => {
    console.log(person)
    // person.rating = 4;
    const cardWidth = person.rating / 5 * 100;
    const stars = Array(person.rating).fill(star).concat(Array(5 - person.rating).fill(voidstar));



    return (
        <div
            className="px-4 py-8 bg-secondary rounded-[15px] flex justify-between items-center text-white"
            style={{ width: `${cardWidth}%` }}
        >
            <div className="flex w-full gap-2 justify-center">
                <div className="flex items-center w-1/3">
                    <img src={person.picture} alt={person.name} className="w-[100px] h-[100px] rounded-full border-[2px]" />
                </div>
                <div className="flex flex-col items-start w-2/3">
                    <div className="flex gap-1">
                        {stars.map((star, index) => (
                            <img key={index} src={star} alt="star" className="w-[20px] h-[20px]" />
                        ))}
                    </div>
                    <div className="text-center font-poppins">
                        <h3 className="text-[16px] font-bold">{person.name}</h3>
                        <h4 className="text-start text-[12px] text-[#ADADAD] font-light">{person.position}</h4>
                    </div>
                    <div>
                        <p className="text-[10px] max-w-[75%]">
                            {person.review}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
};

const Testimonials = () => {

    return (
        <section className="w-full flex flex-col gap-4">
            <h1 className="text-[24px] text-center text-white font-poppins font-bold mt-8">Testimonials</h1>

            {TESTIMONIALS.map(person => (
                <Card person={person} />
            ))}

        </section>
    )
}

export default Testimonials

// {
//     id: 1,
//     rating: 4,
//     name: "Oliver Söderlund Granzer",
//     picture: oliver,
//     position: "CEO of GetGymWear",
//     review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut",
// },