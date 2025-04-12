import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav';
import Banner from './Components/Banner';
import Feedback from './Components/Feedback';
import Footer from './Components/Footer';
import Split from './Components/Split';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Banner/>
      <Split/>
      <Feedback/>
      <Footer/>
    </>
  )
}

export default App;