const data = [
    {id:1, name:"Aditya", age:27},
    {id:3, name:"Muku", age:25},
];
  
const UlLiMap = () => {
    return (
    <>
    <ul>
      {data.map( (obj) => {return(<li key={obj.id}> {obj.name} {obj.age}</li>);})}
    </ul>
    </>
  );
};

export default UlLiMap;