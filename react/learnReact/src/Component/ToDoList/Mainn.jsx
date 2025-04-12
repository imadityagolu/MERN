import { useState } from "react";
import Form from "./Form"
import Todos from "./Todos"

function Mainn() {

    const [input, setInput] = useState("");

    const [tasks, setTasks] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        // pushing input into task array
        setTasks([...tasks, input]);

        // reseting input
        setInput("");
    }

    return(
        <>
        <Form 
        input={input} 
        setInput={setInput} 
        handleSubmit={handleSubmit}/>

        <Todos tasks={tasks}/>
        </>
    );
};

export default Mainn;