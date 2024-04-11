import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StockPerformanceTracker from "./components/StockPerformanceTracker";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="bg-primary w-full h-full">
            <div className="flex flex-col h-screen overflow-auto">
                <header className>
                    <Navbar />
                </header>
                <main className="flex-1 flex flex-col">
                    <Hero />
                    <p className="w-full text-center text-white opacity-[0.5] text-[14px] font-poppins font-light">
                        24h <br />Data By CoinGecko
                    </p>
                    <StockPerformanceTracker fetchOn={false} />
                </main>
            </div>
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
