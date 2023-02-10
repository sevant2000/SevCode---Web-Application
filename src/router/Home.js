import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Lang from "../components/Lang";
import Navbar from "../components/Navbar";

function Home() {
    return(
        <>
        <Navbar />
        <Hero
        cName = "hero"
        heroImg = "https://images.unsplash.com/photo-1609260843286-9d8ad4f7e72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        title = "Start Your Programing Journey Here"
        text = "Choose Your Favourite Plan"
        buttonText = "Code Plan"
        url = "/"
        btnClass = "show"
        />
        <Destination/>
        <Lang/>
        <Footer/>
        </>
    )
}

export default Home