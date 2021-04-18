import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import useMediaQuery from "use-mediaquery";
import Slider from "react-slick";

import MediaImage from '../../assets/img/background/medium-image.png'
import Image1 from '../../assets/img/background/17190.png'
import Image2 from '../../assets/img/background/wallpaper-of-games.png'
import Image3 from '../../assets/img/background/best gaming wallpapers for pc.png'
import Icon1 from '../../assets/img/icon/surface1.png'
import Icon2 from '../../assets/img/icon/Group 16.png'
import Icon3 from '../../assets/img/icon/Group 33.png'
import ActivepageNationIcon from '../../assets/img/icon/Path 4.png'
import PageNationIcon from '../../assets/img/icon/Path 5.png'

function Medium() {
    const desktop = useMediaQuery("(min-width: 1025px)");
    const mobile = useMediaQuery("(max-width: 414px)");
    const tablet = useMediaQuery("(max-width: 1024px)");

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };

    const [slide, setSlide] = React.useState()
    const[activeslide, setActiveslide] = React.useState(0)

    return (
        <div className="medium-root">
           <Container className="py-5">
               <Row>
                   <Col lg={6} style={{textAlign: (mobile|tablet)?"center":"left"}}>
                       <p className="medium-title text-white  my-2"><strong>How Dose LayzrTV<br/>Work ?</strong></p>
                       <p className="medium-text text-white my-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        Lorem ipsum dolor sit amet.<br/><br/>

                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <button className="custom-button medium-text">RESISTER NOW</button>
                   </Col>
                   <Col lg={6}>
                       <div className="mt-2">
                            <Image src={MediaImage} className="w-100"></Image>
                       </div>
                   </Col>
               </Row>
            </Container>
            <div className="py-5 lastest-live-gams">
                <Container className="mt-lg-5">
                    <p className="medium-title text-white text-center mt-lg-5"> <strong>Latest Live Gams</strong></p>
                    {
                        desktop && 
                            <Row>
                                <Col lg={4}>
                                    <Image src={Image1} className="w-100  mt-lg-5"></Image>
                                    <div className="my-3">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-white lastest-live-gams-text">4 GROUP</p>
                                            <p className="text-white lastest-live-gams-text">PRIZE POOL</p>
                                            <p className="text-white lastest-live-gams-text">APR.14.2020-03.13PM</p>
                                        </div>
                                        <div className="d-flex justify-content-left">
                                            <p className="lastest-live-gams-text-red">32 PLAYERS</p>
                                            <p className="lastest-live-gams-text-red ml-4">$ 5000</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <Image src={Image3} className="w-100 mt-lg-5"></Image>
                                    <div className="my-3">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-white lastest-live-gams-text">4 GROUP</p>
                                            <p className="text-white lastest-live-gams-text">PRIZE POOL</p>
                                            <p className="text-white lastest-live-gams-text">APR.14.2020-03.13PM</p>
                                        </div>
                                        <div className="d-flex justify-content-left">
                                            <p className="lastest-live-gams-text-red">32 PLAYERS</p>
                                            <p className="lastest-live-gams-text-red ml-4">$ 5000</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <Image src={Image2} className="w-100 mt-lg-5"></Image>
                                    <div className="my-3">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-white lastest-live-gams-text">4 GROUP</p>
                                            <p className="text-white lastest-live-gams-text">PRIZE POOL</p>
                                            <p className="text-white lastest-live-gams-text">APR.14.2020-03.13PM</p>
                                        </div>
                                        <div className="d-flex justify-content-left">
                                            <p className="lastest-live-gams-text-red">32 PLAYERS</p>
                                            <p className="lastest-live-gams-text-red ml-4">$ 5000</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                    }
                    {
                        tablet&&<>
                            <Slider {...settings} ref={slider => (setSlide(slider))}>
                                <div>
                                    <Image src={Image1} className="w-100  mt-5"></Image>
                                    <div className="my-3">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-white lastest-live-gams-text">4 GROUP</p>
                                            <p className="text-white lastest-live-gams-text">PRIZE POOL</p>
                                            <p className="text-white lastest-live-gams-text">APR.14.2020-03.13PM</p>
                                        </div>
                                        <div className="d-flex justify-content-left">
                                            <p className="lastest-live-gams-text-red">32 PLAYERS</p>
                                            <p className="lastest-live-gams-text-red ml-4">$ 5000</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={Image3} className="w-100  mt-5"></Image>
                                    <div className="my-3">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-white lastest-live-gams-text">4 GROUP</p>
                                            <p className="text-white lastest-live-gams-text">PRIZE POOL</p>
                                            <p className="text-white lastest-live-gams-text">APR.14.2020-03.13PM</p>
                                        </div>
                                        <div className="d-flex justify-content-left">
                                            <p className="lastest-live-gams-text-red">32 PLAYERS</p>
                                            <p className="lastest-live-gams-text-red ml-4">$ 5000</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Image src={Image2} className="w-100  mt-5"></Image>
                                    <div className="my-3">
                                        <div className="d-flex justify-content-between">
                                            <p className="text-white lastest-live-gams-text">4 GROUP</p>
                                            <p className="text-white lastest-live-gams-text">PRIZE POOL</p>
                                            <p className="text-white lastest-live-gams-text">APR.14.2020-03.13PM</p>
                                        </div>
                                        <div className="d-flex justify-content-left">
                                            <p className="lastest-live-gams-text-red">32 PLAYERS</p>
                                            <p className="lastest-live-gams-text-red ml-4">$ 5000</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div style={{cursor:"pointer"}} onClick={()=>{setActiveslide(1); slide.slickGoTo(0)}}>
                                        <p className="position-absolute text-white hero-bottom-text" style={{marginLeft:"10px", marginTop:'5px'}}>01</p>
                                        <Image src={(activeslide == 1)?ActivepageNationIcon:PageNationIcon}/>
                                    </div>
                                    <div style={{cursor:"pointer"}} onClick={()=>{setActiveslide(2); slide.slickGoTo(1)}}>
                                        <p className="position-absolute text-white hero-bottom-text" style={{marginLeft:"10px", marginTop:'5px'}}>02</p>
                                        <Image src={(activeslide == 2)?ActivepageNationIcon:PageNationIcon}/>
                                    </div>
                                    <div style={{cursor:"pointer"}} onClick={()=>{setActiveslide(3); slide.slickGoTo(2)}}>
                                        <p className="position-absolute text-white hero-bottom-text" style={{marginLeft:"10px", marginTop:'5px'}}>03</p>
                                        <Image src={(activeslide ==3)?ActivepageNationIcon:PageNationIcon}/>
                                    </div>
                                </div>
                            </div>
                            </>
                    }
                </Container>
            </div>
            <div className="py-5">
                <Container className="py-5">
                    <Row>
                        <Col xs={4} className="text-center">
                            <Image src={Icon1}/>
                        </Col>
                        <Col xs={4} className="text-center">
                            <Image src={Icon2}/>
                        </Col>
                        <Col xs={4} className="text-center">
                            <Image src={Icon3}/>
                        </Col>
                        <Col xs={4} className="text-center">
                            <p className="text-white number-text">900 +</p>
                            <p>FACEBOOK STREAMS</p>
                        </Col>
                        <Col xs={4} className="text-center">
                            <p className="text-white number-text">1100 +</p>
                            <p>YOUTUBE STREAMS</p>
                        </Col>
                        <Col xs={4} className="text-center">
                            <p className="text-white number-text">900 +</p>
                            <p>FACEBOOK STREAMS</p>
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Medium
