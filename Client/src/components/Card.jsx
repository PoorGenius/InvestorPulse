import { PieChart } from '@mui/x-charts/PieChart';
import React from 'react';

const Card = () => {
    const data = [
        { id: 0, value: 4000, label: 'Bitcoin', color: '#1B1A55' },
        { id: 1, value: 2000, label: 'Tesla', color: '#070F2B' },
        { id: 2, value: 7500, label: 'Nvidia', color: '#535C91' },
    ];

    return (
        <div>
            <div className="flex flex-col w-[212px] h-[165px] bg-card outline outline-[1px] outline-white rounded-[25px]">
                <h3 className="text-center text-white mt-2 text-[14px] font-poppins font-bold">Total Amount Invested <br /> $13500</h3>
                <div className="flex mt-4">
                    <PieChart
                        colors={data.map(item => item.color)}
                        series={[{ data: data.map(item => ({ id: item.id, value: item.value })) }]}
                        width={84}
                        height={84}
                        margin={{ top: 1, right: 0, bottom: 1, left: 0 }}
                    />
                    {/* Overlay labels */}
                    <div className="flex flex-col gap-2">
                        {data.map(item => (
                            <div key={item.id} className="flex items-center gap-2 mr-5">
                                <div className="w-[15px] h-[15px]" style={{ backgroundColor: item.color }}></div>
                                <p className="text-white text-[14px] font-poppins">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
