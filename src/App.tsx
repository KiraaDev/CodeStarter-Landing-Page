import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Highlights from "./components/Highlights"

function App() {


  return (
    <main className="bg-white min-h-svh dark:bg-gray-950">
      <Header />
      
      <div className="pt-[10svh] w-[90%] md:w-[85%] mx-auto flex flex-col items-center">
        <HeroSection />
        {/* <Highlights /> */}
      </div>
    </main>
  )
}

export default App
