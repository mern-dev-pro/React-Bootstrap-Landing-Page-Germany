import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import useMediaQuery from "use-mediaquery";

import Brand from '../../assets/img/brand/LayzrLogo.png'
import UploadIcon from '../../assets/img/icon/Group 29.png'

function Footer() {
    const desktop = useMediaQuery("(min-width: 1025px)");
    const mobile = useMediaQuery("(max-width: 600px)");
    const tablet = useMediaQuery("(max-width: 1024px)");
    return (
        <div className="footer-root py-3">
           <Container className="mt-5">
                <div className="d-flex align-items-center justify-content-center">
                    <Image src={Brand} width={75}></Image>
                    <p className="header-logo-title ml-3 my-0">Layzr.TV</p>
                </div>
                {
                    (desktop)  && 
                        <div className="px-5 py-3 d-flex justify-content-center">
                            <div className='px-4'>
                                <a href="#" className="text-decoration-none"><p className="nav-link-text text-white">Home </p> </a>
                            </div>
                            <div  className='px-4'>
                                <a href="#" className="text-decoration-none"><p className="nav-link-text text-white">How Dose LayzrTV Work </p></a>
                            </div>
                            <div  className='px-4'>
                                <a href="#" className="text-decoration-none"><p className="nav-link-text text-white">FAQ </p></a>
                            </div >
                            <div  className='px-4'>
                                <a href="#" className="text-decoration-none"><p className="nav-link-text text-white">Privacy Policy </p></a>
                            </div>
                        </div>
                }
                {
                    tablet && 
                        <div className="px-5 py-3 text-center">
                            <a href="#" className="text-decoration-none"><p className="nav-link-text text-white">Home </p> </a>
                            <a href="#" className="text-decoration-none"><p className="nav-link-text text-white">How Dose LayzrTV Work </p></a>
                            <a href="#" className="text-decoration-none"><p className="nav-link-text text-white">FAQ </p></a>
                            <a href="#" className="text-decoration-none"><p className="nav-link-text text-white">Privacy Policy </p></a>
                        </div>
                }
           </Container>
           <hr className="bg-muted"/>
           <Container className='text-center'>
                <p className="nav-link-text text-white">© 2020 Layzr.TV</p>
                <Image src={UploadIcon} className="position-fixed" style={{bottom:'20px', right:'20px'}}/>        
           </Container>
        </div>
    )
}

export default Footer
