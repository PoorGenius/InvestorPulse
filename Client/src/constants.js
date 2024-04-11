// import { bnb, btc, usdt, xrp, eth } from "./assets";

export const NAV_LINKS = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About Us",
        url: "/about",
    },
    {
        title: "Contact Us",
        url: "/contact",
    }
];

// export const FINANCIALS = [
//     {
//         title: "Bitcoin",
//         icon: btc,
//         percentage: "+2.45%",
//     },
//     {
//         title: "Ethereum",
//         icon: eth,
//         percentage: "+1.19%",
//     },
//     {
//         title: "Binance Coin",
//         icon: bnb,
//         percentage: "-0.32%",
//     },
//     {
//         title: "Ripple",
//         icon: xrp,
//         percentage: "-0.45%",
//     },
//     {
//         title: "Tether",
//         icon: usdt,
//         percentage: "+0.00%",
//     }
// ];

export const CARDS_DATA =
    [

        {
            title: "Total Amount Invested",
            calculationType: "sum",
            data: [
                { id: 0, value: 4000, label: 'Bitcoin', color: '#1B1A55' },
                { id: 1, value: 2000, label: 'Tesla', color: '#070F2B' },
                { id: 2, value: 7500, label: 'Nvidia', color: '#535C91' }
            ],
        },
        {
            title: "Total Capital Invested",
            calculationType: "proportion",
            data: [
                { id: 0, value: 13500, label: "Invested", color: "#1B1A55" },
                { id: 1, value: 2000, label: "Remaining", color: "#070F2B" },
            ],
        },
        {
            title: "Portfolio Distribution",
            calculationType: "proportion",
            data: [
                { id: 0, value: 6000, label: "Stocks", color: "#0088CC" },
                { id: 1, value: 4000, label: "Bonds", color: "#0077B5" },
                { id: 2, value: 10000, label: "Real Estate", color: "#005FA3" }
            ],
        }


    ];