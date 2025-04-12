
function Form({input, setInput, handleSubmit}) {
    return(
        <>
        <form action="" onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Enter task..." 
            value={input} 
            onChange={ (x) => setInput(x.target.value)} 
            ></input>
            <button type="submit">Add</button>
        </form>
        </>
    );
};

export default Form;