import { bnb, btc, usdt, xrp, eth } from "./assets";

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

export const FINANCIALS = [
    {
        title: "Bitcoin",
        icon: btc,
        percentage: "+2.45%",
    },
    {
        title: "Ethereum",
        icon: eth,
        percentage: "+1.19%",
    },
    {
        title: "Binance Coin",
        icon: bnb,
        percentage: "-0.32%",
    },
    {
        title: "Ripple",
        icon: xrp,
        percentage: "-0.45%",
    },
    {
        title: "Tether",
        icon: usdt,
        percentage: "+0.00%",
    }
];