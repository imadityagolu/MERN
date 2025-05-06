import Nav from './Components/Nav';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function First() {
    return (
        <>
        <Nav/>

            <Outlet/>

        </>
    );
}
export default First;