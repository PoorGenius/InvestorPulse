import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import StockPerformanceTracker from "./components/StockPerformanceTracker"

const App = () => {
    return (
        <div className="bg-primary w-full h-full">
            <div className="flex flex-col h-screen">
                <header>
                    <Navbar />
                </header>
                <main className="flex-1 overflow-hidden flex flex-col justify-content-between">
                    <Hero />

                    <p className="w-full text-center text-white opacity-[0.5] text-[14px] font-poppins font-light"
                    >24h Change</p>
                    <StockPerformanceTracker />
                </main>
            </div>
        </div>
    );
};

export default App