import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../components/assets/img3.avif";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
    return(
        <>
        <Navbar />
        <Hero
        cName = "hero-mid"
        heroImg = {ContactImg}
        //title = "About Section"
        btnClass = "hide"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact