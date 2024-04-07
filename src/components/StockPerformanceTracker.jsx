import { useState, useEffect } from "react"

import { FINANCIALS } from "../constants"
import { arrowDown, arrowUp } from "../assets"

const StockPerformanceTracker = () => {
    const [threeIdx, setThreeIdx] = useState([0, 1, 2]);

    useEffect(() => {
        const interval = setInterval(() => {
            setThreeIdx((prev) => prev.map((idx) => idx === FINANCIALS.length - 1 ? 0 : idx + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, [threeIdx]);

    const financials = [
        FINANCIALS[threeIdx[0]],
        FINANCIALS[threeIdx[1]],
        FINANCIALS[threeIdx[2]]
    ];

    return (
        <section
            className="w-full h-[100px] bg-secondary"
        >
            <div className="flex w-full h-full items-center justify-center gap-6">
                {financials.map((financial, idx) => (
                    <div className="flex gap-2"
                        key={financial.title + idx}
                    >
                        <div className="flex flex-col gap-2">
                            <img src={financial.icon} alt={financial.title} className="w-[24px] h-auto"
                            />
                            <img src={financial.percentage[0] == "+" ? arrowUp : arrowDown}
                                className="w-[16px] h-auto"
                                alt={financial.percentage}
                            />
                        </div>
                        <div className="flex flex-col font-poppins font-bold w-full">
                            <h4 className="text-white text-[14px]">{financial.title}
                            </h4>
                            <p className={`text-[14px] ${financial.percentage[0] == "+" ? "text-[#03A676]" : "text-[#CF304A]"}`}>{financial.percentage}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default StockPerformanceTracker