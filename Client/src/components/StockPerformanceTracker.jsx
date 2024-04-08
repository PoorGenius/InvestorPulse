import { useState, useEffect } from "react";

import useIsMobile from "../hooks/useIsMobile";

import { arrowDown, arrowUp } from "../assets";

const DisplayFinancials = ({ financials }) => {
    return (
        <>
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

const StockPerformanceTracker = () => {
    const isMobile = useIsMobile();
    const [updateData, setUpdateData] = useState(true);
    const [TrackIndex, setTrackIndex] = useState([0, 1, 2, 3, 4]);
    const [TrackItemIterations, setTrackItemIterations] = useState(0); // Add this state to keep track of the number of iterations [0, 1, 2, 3, 4
    const [financialsData, setFinancialsData] = useState([]);

    // Adjust the useEffect hook for fetching data
    useEffect(() => {
        if (!updateData) return;

        console.log("Accessing new data");
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/gecko/updateData", {
                    method: "POST",
                });

                const data = await response.json();

                if (data.message === "success") {
                    console.log("Data updated successfully");
                    const response = await fetch("http://localhost:3000/api/gecko/getData");
                    const newData = await response.json();
                    setFinancialsData(newData);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setUpdateData(false); // Ensure this is set to false after the fetch operation
            }
        };

        fetchData();
    }, [updateData]); // Add updateData as a dependency

    // Adjust the useEffect hook for managing index and deciding when to fetch new data
    useEffect(() => {

        setTrackItemIterations(TrackItemIterations + 1);
        const timeoutId = setTimeout(() => {
            setTrackIndex(current => current.map(index => (index + 1 >= financialsData.length ? 0 : index + 1)));
        }, 3000);

        return () => clearTimeout(timeoutId); // Cleanup
    }, [TrackIndex, financialsData.length]);

    // The rest of your component remains the same

    const displaySize = isMobile ? 3 : 5; // Or whatever your desktop size is
    const dataToDisplay = financialsData.slice(TrackIndex[0], TrackIndex[displaySize - 1] + 1);

    FIXA IMORGON SÅ ATT DEN UPPDATERAR I SLUTET AV ALLA CURRENCIES SOM VISAS OCH ATT DET INTE LADDAR I 5 SEKUNDER FÖR VARJE GÅNG MED ITEMS HIDDEN

    return (
        <section className="w-full h-[100px] bg-secondary">
            <div className={`w-full h-full items-center justify-center gap-8 md:gap-12 xl:gap-24 flex ${isMobile ? 'md:hidden' : 'hidden md:flex'}`}>
                <DisplayFinancials financials={dataToDisplay} />
            </div>
        </section>
    )
}

export default StockPerformanceTracker