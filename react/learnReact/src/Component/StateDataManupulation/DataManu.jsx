import {useState} from "react";
import List from "./DataFunction";

const data = [
    {id:1, name:"Aditya", age:27},
    {id:2, name:"Diwakar", age:26},
    {id:3, name:"Muku", age:25},
];
  
const DataManu = () => {

    const [arr, setArr] = useState(data);

    return (
    <>
    <ul>
      <List arr={arr} setArr={setArr} />
    </ul>
    </>
  );
};

export default DataManu;