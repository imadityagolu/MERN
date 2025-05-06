import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [subject, setSubject] = useState("");
  const [hour, setHour] = useState("");

  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const obj = {id: Date.now(), subject: subject, hour: hour, };

    setData([...data, obj]);

    setSubject("");
    setHour("");

  }

  
  function modifyScore(id, sign){
        
    setData(
        data.map((obj) => obj.id === id ? {...obj, hour: sign === "+" ? Number(obj.hour) + 1 : Number(obj.hour) - 1} : obj)
    );

}

  return (
    <>
      <div className="text-center place-content-center top-50 relative">

        <h1 className="text-2xl">Geekster Education Planner
        </h1>

        <div className="flex p-2 place-content-center top-5 relative">

        <form onSubmit={handleSubmit} className="gap-3 relative flex">
        <input 
        type="text" 
        placeholder="Subject" 
        className="border-1 rounded-md p-2" 
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        />

        <input 
        type="number" 
        placeholder="Hour" 
        className="border-1 rounded-md p-2"
        value={hour}
        onChange={(e) => setHour(e.target.value)}
        />

        <button 
        type="submit" 
        className="border-1 rounded-md bg-blue-500 text-white p-2 w-15">
        Add</button>
        </form>

        </div>

        <div>
          {data.length > 0 && 
          data.map((obj) => {
            return (
              <div className="flex text-black relative top-10 left-40 w-100 text-xl p-2 gap-2">
                <p>{obj.subject} - </p>
                <p>{obj.hour} hours</p>

                <span className="border-1 bg-green-500 text-white rounded-md w-5" onClick={() => modifyScore(obj.id, "+")}>+</span>

                <span className="border-1 bg-red-500 text-white rounded-md w-5" onClick={() => modifyScore(obj.id, "-")}>-</span>

              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default App;
