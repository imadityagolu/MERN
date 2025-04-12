import { useState, useEffect } from 'react'

function BillSpliter(){

    const [billAmount, setBillAmount] = useState("");
    const [tipAmount, setTipAmount] = useState("");
    const [total, setTotal] = useState(0);

    useEffect(() => 
        {setTotal(Number(billAmount) + Number(tipAmount));}, 
        [billAmount, tipAmount]
    );

    function handleTips(tip){
        setTipAmount(Math.floor((billAmount * tip) / 100));
    }

    return(
        <>
        <div className="m-5 p-5">

        <label htmlFor="billAmount">Bill Amount: </label>

        <input 
        id="billAmount" 
        type="text" 
        placeholder="Enter bill amount" 
        name="billAmount" 
        value={billAmount} 
        onChange={(e) => setBillAmount(e.target.value)} 
        className="border-2 border-red-500 m2 p-2 rounded-lg" />

        <br></br><br></br>

        <label>Select the % of bill amount to tip...</label>

        <div className="flex">

        <br></br><br></br>
        
        <p 
        onClick={(e) => handleTips(e.target.innerText)} 
        className="w-10 text-center border-5 border-purple-500 border-round m-2 transition-all duration-300 hover:bg-purple-200">5</p>

        <p 
        onClick={(e) => handleTips(e.target.innerText)} 
        className="w-10 text-center border-5 border-purple-500 border-round m-2 transition-all duration-300 hover:bg-purple-200">10</p>

        <p 
        onClick={(e) => handleTips(e.target.innerText)} 
        className="w-10 text-center border-5 border-purple-500 border-round m-2 transition-all duration-300 hover:bg-purple-200">15</p>

        <p 
        onClick={(e) => handleTips(e.target.innerText)} 
        className="w-10 text-center border-5 border-purple-500 border-round m-2 transition-all duration-300 hover:bg-purple-200">20</p>

        <p 
        onClick={(e) => handleTips(e.target.innerText)} 
        className="w-10 text-center border-5 border-purple-500 border-round m-2 transition-all duration-300 hover:bg-purple-200">25</p>
        
        <p 
        onClick={(e) => handleTips(e.target.innerText)} 
        className="w-10 text-center border-5 border-purple-500 border-round m-2 transition-all duration-300 hover:bg-purple-200">30</p>
        </div>

        <br></br>

        <label htmlFor="tipAmount"> Tip Amount: </label>

        <input 
        id="tipAmount" 
        type="text" 
        placeholder="Enter tip amount" 
        name="tipAmount" 
        value={tipAmount} 
        onChange={(e) => setTipAmount(e.target.value)} 
        className="border-2 border-red-500 m2 p-2 rounded-lg" />

        <br></br><br></br>
        <p className="m-2 p-2 text-3xl">Total Amount = {total}</p>
        </div>
        </>
    );
}

export default BillSpliter;