import { graph } from "../../assets"
import { LineChart } from '@mui/x-charts/LineChart';

const GraphCard = () => {
    return (
        <div className="flex justify-center items-center mt-2 w-[300px] h-[205px] sm:w-[400px] sm:h-[260px] md:w-[550px] md:h-[320px] lg:w-[550px] lg:h-[320px] bg-card outline outline-[1px] outline-white rounded-[25px]">
            <LineChart
                xAxis={[{
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    label: 'Months',
                }]}
                series={[
                    {
                        data: [0, 10, 7, 12, 13, 12.5, 12.9, 14, 15, 14, 10, 14],
                        label: 'Capital in thousands',
                    },
                ]}
                slotProps={
                    {
                        legend: {
                            labelStyle: {
                                fill: "white",
                            }
                        },
                    }
                }
                sx={{
                    // Optional: Change the color of the X-axis line to white if needed
                    ".MuiChartsAxis-bottom .MuiChartsAxis-line": {
                        stroke: "white",
                        strokeWidth: 2
                    },
                    ".MuiChartsAxis-left .MuiChartsAxis-line": {
                        stroke: "white",
                        strokeWidth: 2
                    },
                    ".MuiChartsAxis-tickLabel": {
                        fill: "white",
                    },
                    ".MuiChartsAxis-bottom .MuiChartsAxis-label": {
                        fill: "white", // Set the axis label color to white
                        fontSize: "16px" // Optionally adjust the font size for visibility
                    },
                    ".MuiChartsAxis-tick": {
                        fill: "white",
                        stroke: "white"
                    },
                }}

                width={500}
                height={300}
            />
        </div>
    )
}

export default GraphCard