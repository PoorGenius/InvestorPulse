import React from 'react';
import { PieChart } from '@mui/x-charts/PieChart'; // Ensure you have installed @mui/x-charts and its dependencies
import useScreenSize from '../../hooks/useScreenSize';

const calculateValue = (data, calculationType, currency) => {
    switch (calculationType) {
        case "sum":
            return `${currency}${data.reduce((acc, item) => acc + item.value, 0)}`;
        case "proportion":
            return `${((data[0].value / data.reduce((acc, item) => acc + item.value, 0)) * 100).toFixed(1)}%`;
    };
}

const Card = ({ title, data, calculationType, currency = "$" }) => {
    const calculatedValue = calculateValue(data, calculationType, currency);

    const screenSize = useScreenSize();
    const cardDimensions = screenSize === "sm" ? 84 : screenSize === "md" ? 120 : screenSize === "lg" ? 150 : 200;


    return (

        <div className="flex flex-col w-[212px] h-[165px] sm:w-[300px] sm:h-[225px] md:w-[400px] md:h-[280px] lg:w-[500px] lg:h-[320px] bg-card outline outline-[1px] outline-white rounded-[25px]">
            <h3 className="text-center text-white mt-2 text-[14px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-poppins font-bold">{title} <br /> {calculatedValue}</h3>
            <div className="flex mt-4">
                <PieChart
                    colors={data.map(item => item.color)}
                    series={[{ data: data.map(item => ({ id: item.id, value: item.value })) }]}
                    width={cardDimensions}
                    height={cardDimensions}
                    margin={{ top: 1, right: 0, bottom: 1, left: 0 }}
                />
                {/* Overlay labels */}
                <div className="flex flex-col gap-2">
                    {data.map(item => (
                        <div key={item.id} className="flex items-center gap-2 mr-5">
                            <div className="w-[15px] h-[15px]" style={{ backgroundColor: item.color }}></div>
                            <p className="text-white text-[14px] lg:text-[22px] font-poppins">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Card;
