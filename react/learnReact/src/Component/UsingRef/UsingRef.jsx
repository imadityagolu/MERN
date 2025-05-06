import { useState, useRef } from "react";

function UsingRef(){

    const [name, setName] = useState("");
    const [names, setNames] = useState([]);

    const count = useRef(1);

    //for refference again back to input box
    const inputRef = useRef(null);

    function handleClick(){
        const obj = { id: count.current++, name: name};
        setNames([...names, obj]);
        setName("");

        //
        inputRef.current.focus();
    }

    return (
        <>
        <div className="flex p-4">
            <input 
            type="text" 
            placeholder="Enter a name..." 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="border-2 border-gray-300 rounded-md p-2 m-2" 
            
            //
            ref={inputRef}
            />

            <button 
            className="border-2 border-red-500 bg-rose-400 rounded-lg p-1 h-10 relative top-2 text-white" 
            onClick={handleClick}>
                Add Name
            </button>
        </div>

            <ul 
            className="relative left-10 w-100">
                { names.length > 0 && names.map((obj) => (<li id={'name$obj.id}'} key={obj.id}> • {obj.name}</li>)) }
            </ul>
        
        </>
    );
}

export default UsingRef;