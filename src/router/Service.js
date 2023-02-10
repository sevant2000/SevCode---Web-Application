import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../components/assets/img.avif";
import Footer from "../components/Footer";
import Lang from "../components/Lang";

function Service() {
    return(
        <>
        <Navbar />
        <Hero
        cName = "hero-mid"
        heroImg = {ServiceImg}
        //title = "About Section"
        btnClass = "hide"
        />
        <Lang/>
        <Footer/>
        </>
    )
}

export default Service