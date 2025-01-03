import Header from '~/components/Layout/components/Header/header';
import layoutmodule from  './DefaultLayout.module.scss'
import Footer from '../components/Footer';
import Home from '~/pages/Home';
import Movie from '~/pages/Movie';
import PaginatedItems from '~/pages/Movie/components/Pagnigation';
import SingleMovie from '~/pages/SingleMovie';
import Admin from '~/pages/Admin';
import MovieAdd from '~/pages/Admin/components/MovieAdd';
import { Outlet } from 'react-router-dom';
function DefaultLayoutsAdmin() {
    return (
        <div className= {layoutmodule.wrapper}>
            <Outlet />
            <Footer />
        </div>
    );
}

export default DefaultLayoutsAdmin;
