import { Link } from "react-router-dom";

function Header(){
    return (
        <>
        <div className="bg-gray-400 flex gap-3">
        <Link to="/" className="underline">Home</Link>
        <Link to="/about" className="underline">About</Link>
        </div>
        </>
    );
}
export default Header;