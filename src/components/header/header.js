import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import useMediaQuery from "use-mediaquery";

import LogoImage from '../../assets/img/brand/LayzrLogo.png'
import DropdownIcon from '../../assets/img/icon/menu.png'

function Header(props) {
    const desktop = useMediaQuery("(min-width: 1025px)");
    const mobile = useMediaQuery("(max-width: 600px)");
    const tablet = useMediaQuery("(max-width: 1024px)");
    return (
        <div>
            <div className="header-root">
                <Container>
                    {/* main header */}
                    {
                        desktop&&
                            <Navbar className="header-desktop">
                                <Navbar.Brand href="#">
                                    <div className="d-flex align-items-center">
                                        <Image src={LogoImage} width={75}></Image>
                                        <p className="header-logo-title ml-3 my-0">Layzr.TV</p>
                                    </div>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                                <Navbar.Collapse className="justify-content-end">
                                    <Nav.Link className="nav-link-text text-white">Home</Nav.Link>
                                    <Nav.Link className="nav-link-text text-white">How Dose LayzrTV Work</Nav.Link>
                                    <Nav.Link className="nav-link-text text-white">FAQ </Nav.Link>
                                    <Nav.Link className="nav-link-text text-white"><button className="custom-button">Contact Us</button> </Nav.Link>
                                </Navbar.Collapse>
                            </Navbar>
                    }

                    {/* tablet header */}
                    {
                        (tablet && !mobile) && 
                            <Navbar className="header-tablet">
                                <Navbar.Brand href="#">
                                    <Image src={LogoImage} width={75}></Image>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                                <Navbar.Collapse className="justify-content-end">
                                    <Nav.Link className="nav-link-text text-white"><button className="custom-button">Contact Us</button> </Nav.Link>
                                    <Nav.Link>
                                        <Image src={DropdownIcon} width={50}></Image>
                                    </Nav.Link>
                                </Navbar.Collapse>
                            </Navbar>
                    }

                    {/* mobile header */}
                    {
                        mobile &&   
                            <Navbar className="header-mobile">
                                <Navbar.Brand href="#">
                                    <Image src={LogoImage} width={75}></Image>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                                <Navbar.Collapse className="justify-content-end">
                                    <Nav.Link>
                                        <Image src={DropdownIcon} width={50}></Image>
                                    </Nav.Link>
                                </Navbar.Collapse>
                            </Navbar>
                    }
                </Container>
            </div>
        </div>
    )
}

export default Header
