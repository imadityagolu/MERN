import { MdDelete } from "react-icons/md";

function List({arr, setArr}) {

    function handleDelete(id) {
        setArr(arr.filter((obj) => {return obj.id !== id;}));
    }

    return arr.map((obj) => {
        return(
        <li key={obj.id}>{obj.name} - {obj.age} 
    <MdDelete 
        onClick={ () => handleDelete(obj.id)}
        style={{color: "blue"}} /> 
        </li>)}); 
}

export default List;