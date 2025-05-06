import { useState } from 'react'
import QuoteCard from "../Components/QuoteCard";
import QuoteCardList from "../Components/QuoteCardList"
import Footer from '../Components/Footer';

function Quote() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QuoteCardList/>
    <Footer/>
    </>
  );
}

export default Quote;