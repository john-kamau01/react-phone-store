import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

import { ButtonContainer } from './Button';

class Navbar extends Component{
    render(){
        return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-5 pb-3 pt-4">
            <div className="container-fluid">
                <Link to='/' className="navbrand">
                    <i className="fas fa-mobile-alt"></i>&nbsp; Phone Shop
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ml-5">
                            <Link to='/' className="nav-link">
                                Products
                            </Link>
                        </li>
                    </ul>

                    <Link to='/cart' className="ml-auto">
                        <ButtonContainer>
                            <span className="me-2">
                                <i className="fas fa-cart-plus pr-4"></i>
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                </div>
            </div>
        </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
    }
`;


export default Navbar;