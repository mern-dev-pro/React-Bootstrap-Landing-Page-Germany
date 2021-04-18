import React from 'react'
import useMediaQuery from "use-mediaquery";
import Header from '../components/header'
import Hero from '../components/hero'
import Medium from '../components/medium'
import Footer from '../components/footer'

function Home() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Medium/>
            <Footer/>
        </div>
    )
}

export default Home
