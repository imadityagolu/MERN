import { useState } from 'react'
import Banner from '../Components/Banner';
import Feedback from '../Components/Feedback';
import Split from '../Components/Split';
import Footer from '../Components/Footer';

function Home() {

  return (
    <>
    <Banner/>
    <Split/>
    <Feedback/>
    <Footer/>
    </>
  )
}

export default Home;