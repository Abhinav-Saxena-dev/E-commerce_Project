import React from 'react';

import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selector';

import { selectCurrentUser } from '../../redux/user/user,selector';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/4.1 crown.svg';

import './Header.style.scss';
 
const  Header = ({currentUser, hidden}) => (
    <div className="header">
        <Link to = "/" className ="logo-container">
            <Logo className="logo" />
        </Link>  
        <div className="options">
            <Link className="option" to = "/shop">
                SHOP
            </Link>
            <Link className="option" to = "/shop">
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                :
                <Link className = "option" to = '/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
            {
                (!hidden) ? <CartDropdown/> : null
            }
    </div>
)

const mapStateToProps = createStructuredSelector({
     currentUser : selectCurrentUser,
     hidden : selectCartHidden,
});

export default connect(mapStateToProps)(Header);