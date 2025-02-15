import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Highlights from "./components/Highlights"


function App() {


  return (
    <main className="flex justify-center h-[200svh] bg-[#FAFAFA]">
      <Header />
      <div className="pt-[10svh] w-[90%] overflow-hidden md:w-[85%]">
        <HeroSection />
        <Highlights />
      </div>
    </main>
  )
}

export default App
