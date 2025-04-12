import { MdDelete } from "react-icons/md";

function LiList({arr}) {

    function handleDelete(id) {
        console.log("Delete " + id);
    }

    return arr.map((obj)=>{
        return(
        <li key={obj.id}>{obj.name} - {obj.age} 
    <MdDelete 
        onClick={ () => handleDelete(obj.id)}
        style={{color: "blue"}} /> 
        </li>)}); 
}

export default LiList;