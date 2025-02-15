import Header from "./components/Header"
import HeroSection from "./components/HeroSection"


function App() {


  return (
    <main className="flex justify-center h-[200svh]">
      <Header />
      <section className="pt-[10svh] h-[80svh] w-[90%] overflow-hidden">
        <HeroSection />
      </section>
    </main>
  )
}

export default App
