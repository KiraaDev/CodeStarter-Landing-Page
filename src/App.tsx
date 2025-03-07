import FeatureSection from "./components/FeatureSection"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import Footer from "./components/Footer"
function App() {

  return (
    <main className="bg-white min-h-[200svh] dark:bg-gray-950">
      <Header />
      
      <div className="pt-[10svh] w-[90%] md:w-[85%] mx-auto flex flex-col items-center">
        <HeroSection />
        <AboutSection />
        <FeatureSection />
        {/* <Highlights /> */}
        <div className="h-[40svh]"></div>   {/* Spacing */}
        <Footer />
      </div>
      
      
    </main>
  )
}

export default App
