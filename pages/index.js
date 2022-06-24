import Header from "../components/LandingPage/Header/Header"
import FeaturedWork from "../components/LandingPage/FeaturedWorkSection/FeaturedWork"
import ContactSection from "../components/LandingPage/ContactSection/ContactSection"
import KnownTech from "../components/LandingPage/KnownTechSection/KnownTech"

const HomePage = () => {
    return (
        <>
            <Header/>
            <KnownTech/>
            <FeaturedWork/>
            <ContactSection/>
        </>
    )
    }
    export default HomePage