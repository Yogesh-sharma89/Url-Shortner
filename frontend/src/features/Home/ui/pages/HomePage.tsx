import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import LinksSection from "../components/LinksSection"
import Navbar from "../components/Navbar"
import UrlShortenSection from "../components/UrlShortenSection"


const HomePage = () => {
  return (
    <div className="min-h-screen w-full">
        <Navbar/>

        <main>
          {/* hero section  */}

          <HeroSection/>

          {/* url shorten section  */}
          <UrlShortenSection/>

          <LinksSection/>

          <Footer/>

        </main>
    </div>
  )
}

export default HomePage
