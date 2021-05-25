import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { auth } from './firebase';

function Sidebar() {

    const [{ basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }

       showSidebar();
    }

    const showSidebar = () => {
        document.getElementsByClassName('sidebar')[0].classList.toggle('hideSidebar')
    }

    return (
        <div className="sidebar hideSidebar">
            

            <div className="sidebar__welcome sidebar__option">
                <Avatar src="" />
                <h3>Hello, {user?.email}</h3>
            </div>
            <Link to="/" >
                <div className="sidebar__option" onClick={showSidebar}>
                    <h3>Home</h3>
                </div>
            </Link>
            <div className="sidebar__option">
                <h3>Shop by Category</h3>
            </div>
            <div className="sidebar__option">
                <h3> Today's Deals</h3>
            </div>
            <div className="sidebar__option">
                <h3>Your Orders</h3>
            </div>
            <div className="sidebar__option">
                <h3>Your Account</h3>
            </div>
            <div className="sidebar__option">
                <h3>Prime</h3>
            </div>

            <Link to={!user && "/Login"}>
                <div onClick={handleAuthentication} className="sidebar__option">
                    <h3>{user ? 'Sign Out' : 'Sign In'}</h3>
                </div>
            </Link>
        </div>
    )
}

export default Sidebar;
