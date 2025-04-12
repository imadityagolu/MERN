import LiList from "./LiList";

const data = [
    {id:1, name:"Aditya", age:27},
    {id:2, name:"Diwakar", age:26},
    {id:3, name:"Muku", age:25},
];
  
const UlLiMap = () => {
    return (
    <>
    <ul>
      <LiList arr={data} />
    </ul>
    </>
  );
};

export default UlLiMap;