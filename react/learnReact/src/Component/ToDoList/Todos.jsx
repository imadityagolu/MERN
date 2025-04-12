
function Todos({tasks}) {
    return(
        <>
        <h4>Your Todos are...</h4>
        <ul>
            {
                tasks.map((task, index) => {
                    return <li key={index}>{task}</li>;
                })
            }
        </ul>
        </>
    );
};

export default Todos;