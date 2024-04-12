import { useState, useEffect } from "react";

import useScreenSize from "../hooks/useScreenSize";
import { updateCoinData } from "../api/fetchToGeckoApi";

import { arrowDown, arrowUp } from "../assets";

const DisplayFinancials = ({ financials, isFetching = true }) => {
    return (
        <>
            {isFetching && <p className="text-white text-[22px]">Sparing API...</p>}
            {financials.map((financial, idx) => (
                <div className="flex gap-2" key={financial.name + idx}>
                    <div className="flex flex-col gap-2">
                        <img src={financial.image} alt={financial.name} className="w-[16px] h-[16px]" />
                        <img
                            src={parseFloat(financial.percentage) >= 0 ? arrowUp : arrowDown}
                            className="w-[16px] h-[16px]"
                            alt={financial.percentage}
                        />
                    </div>
                    <div className="flex flex-col font-poppins font-bold w-full">
                        <h4 className="text-white text-[14px]">{financial.name}</h4>
                        <p className={`text-[14px] ${parseFloat(financial.percentage) >= 0 ? "text-[#03A676]" : "text-[#CF304A]"}`}>
                            {parseFloat(financial.percentage) >= 0 ? "+" : ""}{parseFloat(financial.percentage).toFixed(2)}%
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

const StockPerformanceTracker = ({ fetchOn }) => {
    const isMobile = useScreenSize() === 'sm';
    const [updateData, setUpdateData] = useState(true);
    const [TrackIndex, setTrackIndex] = useState([0, 1, 2, 3, 4]);
    const [TrackItemIterations, setTrackItemIterations] = useState(0); // Add this state to keep track of the number of iterations [0, 1, 2, 3, 4
    const [financialsData, setFinancialsData] = useState([]);

    const displaySize = isMobile ? 3 : 5;

    // Adjust the useEffect hook for fetching data
    useEffect(() => {
        if (!updateData && fetchOn) return;
        if (!fetchOn) return setFinancialsData([]);

        updateCoinData(fetchOn, setFinancialsData, setUpdateData);

    }, [updateData]); // Add updateData as a dependency

    // Adjust the useEffect hook for managing index and deciding when to fetch new data
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTrackIndex(current => current.map(index => (index + 1 >= financialsData.length ? 0 : index + 1)));
            setTrackItemIterations(current => current + 1);
        }, 3000);

        // Determine when to fetch new data before the cycle repeats
        const itemsLeftUntilCycleRepeat = financialsData.length - TrackItemIterations;
        // Adjust the buffer based on your displaySize; you might need to tweak this value
        const fetchBuffer = displaySize * 2;

        if (itemsLeftUntilCycleRepeat <= fetchBuffer && !updateData) {
            setUpdateData(true);
            setTrackItemIterations(0); // Reset iterations upon deciding to fetch new data
        };

        return () => clearTimeout(timeoutId); // Cleanup
    }, [TrackIndex, financialsData.length, displaySize, updateData, TrackItemIterations]);


    // here i have to find if the data has to be sliced differently, for example if trackIndex is [22,23,0] or [23,0,1] or [22,23,24,0,1]
    // code here

    const calculateDataToDisplay = () => {
        const endIndex = TrackIndex[displaySize - 1];
        if (TrackIndex[0] <= endIndex) {
            // No wrap, direct slice
            return financialsData.slice(TrackIndex[0], endIndex + 1);
        } else {
            // Wrap around, slice in two parts and concatenate
            return [
                ...financialsData.slice(TrackIndex[0], financialsData.length),
                ...financialsData.slice(0, endIndex + 1),
            ];
        }
    };

    const dataToDisplay = calculateDataToDisplay();

    return (
        <section className="w-full h-[100px] bg-secondary">
            <div className="w-full h-full items-center justify-center gap-8 md:gap-12 xl:gap-24 flex">
                <DisplayFinancials financials={dataToDisplay} isFetching={updateData} />
            </div>
        </section>
    )
}

export default StockPerformanceTracker