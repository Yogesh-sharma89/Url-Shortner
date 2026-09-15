import useGetUrls from "../../hooks/server/useGetUrls"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import LinksSection from "../components/LinksSection"
import Navbar from "../components/Navbar"
import UrlShortenSection from "../components/UrlShortenSection"
import { UrlListEmpty } from "../skeletons/UrlListEmpty"
import UrlListSkeleton from "../skeletons/UrlListSkeleton"


const HomePage = () => {


 const {data:urls,isLoading} = useGetUrls();

  return (
    <div className="min-h-screen w-full">
        <Navbar/>

        <main>
          {/* hero section  */}

          <HeroSection/>

          {/* url shorten section  */}
          <UrlShortenSection/>

         {
          isLoading ? <UrlListSkeleton/>
          :
          urls?.length === 0 ? <UrlListEmpty/>
          :
         <LinksSection urls={urls}/>
         }

          <Footer/>

        </main>
    </div>
  )
}

export default HomePage
