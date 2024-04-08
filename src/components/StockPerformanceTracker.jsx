import { useState, useEffect } from "react";

import useIsMobile from "../hooks/useIsMobile";

import { FINANCIALS } from "../constants";
import { arrowDown, arrowUp } from "../assets";

const DisplayFinancials = ({ financials, isMobile }) => {
    return (
        <>
            {financials.slice(0, isMobile ? 3 : 5).map((financial, idx) => (
                <div className="flex gap-2" key={financial.title + idx}>
                    <div className="flex flex-col gap-2">
                        <img src={financial.icon} alt={financial.title} className="w-[24px] h-auto" />
                        <img
                            src={financial.percentage[0] === "+" ? arrowUp : arrowDown}
                            className="w-[16px] h-auto"
                            alt={financial.percentage}
                        />
                    </div>
                    <div className="flex flex-col font-poppins font-bold w-full">
                        <h4 className="text-white text-[14px]">{financial.title}</h4>
                        <p className={`text-[14px] ${financial.percentage[0] === "+" ? "text-[#03A676]" : "text-[#CF304A]"}`}>
                            {financial.percentage}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};


const StockPerformanceTracker = () => {
    const [threeIdx, setThreeIdx] = useState([0, 1, 2, 3, 4]);
    const isMobile = useIsMobile();

    useEffect(() => {
        const interval = setInterval(() => {
            setThreeIdx((prev) => prev.map((idx) => idx === FINANCIALS.length - 1 ? 0 : idx + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [threeIdx]);

    const financials = [
        FINANCIALS[threeIdx[0]],
        FINANCIALS[threeIdx[1]],
        FINANCIALS[threeIdx[2]],
        FINANCIALS[threeIdx[3]],
        FINANCIALS[threeIdx[4]],
    ];

    return (
        <section className="w-full h-[100px] bg-secondary">
            <div className={`w-full h-full items-center justify-center gap-8 md:gap-12 xl:gap-24 flex ${isMobile ? 'md:hidden' : 'hidden md:flex'}`}>
                <DisplayFinancials financials={financials} isMobile={isMobile} />
            </div>
        </section>
    )
}

export default StockPerformanceTracker