import React from 'react'
import QuoteCard from './QuoteCard'
import quotesData from './Quote.json';

const QuoteCardList = () => {
  return (
    <>
    <div className='quote-list'>
    {quotesData?.quotes?.map((quote, index) => (
      <QuoteCard key={index} text={quote.quote} author={quote.author} />
      ))}
    </div>
    </>
  );
}

export default QuoteCardList;