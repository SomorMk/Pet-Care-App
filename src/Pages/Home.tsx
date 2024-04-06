import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import About from '../Components/About'
import Service from '../Components/Service'
import Counter from '../Components/Counter'
import Team from '../Components/Team'
import Feedback from '../Components/Feedback'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home: React.FC = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <About />
            <Service />
            <Counter />
            <Team />
            <Feedback />
            <Contact />
            <Footer />
        </>
    )
}

export default Home