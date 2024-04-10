import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StockPerformanceTracker from "./components/StockPerformanceTracker";
import About from "./components/About";

const App = () => {
    return (
        <div className="bg-primary w-full h-full">
            <div className="flex flex-col h-screen overflow-auto">
                <header>
                    <Navbar />
                </header>
                <main className="flex-1 flex flex-col">

                    <div className="flex-1 flex flex-col justify-content-between">
                        <Hero />

                        <p className="w-full text-center text-white opacity-[0.5] text-[14px] font-poppins font-light"
                        >24h <br />Data By CoinGecko</p>
                        <StockPerformanceTracker fetchOn={false} />
                    </div>
                    <div className="flex flex-col gap-4 mt-4">
                        <About />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App