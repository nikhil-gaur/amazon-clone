import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    const [{ basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    console.log(basket);

    const showSidebar = () => {
        document.getElementsByClassName('sidebar')[0].classList.toggle('hideSidebar')
    }

    return (
        <div className="header">
        
            <div className="header__menuIcon" onClick={showSidebar}>
                <MenuIcon />
            </div>
           

            <Link to="/">
                <img 
                    className="header__logo" 
                    src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png" 
                    alt="" 
                />
            </Link>
          
            {/* Search Bar */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            
            {/* 3 Links */}

            <div className="header__nav">

            {/* 1st Link */}
            <Link to={!user && "/Login"} className="header__link notInResponsive">
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">Hello</span>
                    <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>

            {/* 2nd Link */}
            <Link to="/" className="header__link notInResponsive">
                <div className="header__option">
                    <span className="header__optionLineOne">Return</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </Link>

            {/* 3rd Link */}
            <Link to="/" className="header__link notInResponsive">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>

            {/* 4th Link */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    {/* Shopping Basket Icon */}
                    <ShoppingCartIcon />
                    {/* Number of items in basket */}
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>

            </div>
            {/* Basket with Number */}

        </div>
    )
}

export default Header;
