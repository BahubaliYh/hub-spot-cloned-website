import "./App.css"
import Community from "./components/Community"
import CrmSection from "./components/CrmSection"
import Customers from "./components/Customers"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

import TopNavbar from "./components/TopNavbar"
import WideCta from "./components/WideCta"

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Navbar />
      <Hero />
      <CrmSection />
      <Community />
      <Customers />
      <WideCta />
      <Footer />
    </div>
  )
}

export default App
