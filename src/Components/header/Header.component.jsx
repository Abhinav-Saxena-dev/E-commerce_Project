import React from 'react';

import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selector';

import { selectCurrentUser } from '../../redux/user/user,selector';

import CartIcon from '../cart-icon/cart-icon.component';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/4.1 crown.svg';

// import './Header.style.scss';

import { LogoContainer, HeaderContainer, OptionLink, OptionsContainer } from './Header.styles';
 
const  Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to = "/">
            <Logo className="logo" />
        </LogoContainer>  
        <OptionsContainer>
            <OptionLink to = "/shop">
                SHOP
            </OptionLink>
            <OptionLink to = "/shop">
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                <OptionLink as = "div" onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
                :
                <OptionLink className = "option" to = '/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
            {
                (!hidden) ? <CartDropdown/> : null
            }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
     currentUser : selectCurrentUser,
     hidden : selectCartHidden,
});

export default connect(mapStateToProps)(Header);