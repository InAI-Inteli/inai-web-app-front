import Header from '../Header';
import { Outlet } from 'react-router-dom';

export default function PaginasPrincipais(){
    return(
        <>
            <Header />
            
            <Outlet />
        </>
    )
}