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
            <div className="flex flex-col">
                <header>
                    <Navbar />
                </header>
                <main className="flex-1 flex flex-col gap-20 lg:gap-40">
                    <Hero />
                    <div>
                        <p className="w-full text-center text-white opacity-[0.5] text-[14px] font-poppins font-light">
                            24h <br />Data By CoinGecko
                        </p>
                        <StockPerformanceTracker fetchOn={false} />
                    </div>
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
