import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import useMediaQuery from "use-mediaquery";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import playIcon from '../../assets/img/icon/play-button-arrowhead.png'
import Moviebadge from '../../assets/img/icon/carosel-item-bage.png'
import MessageIcon from '../../assets/img/icon/carosel-message-icon.png'
import Icon1 from '../../assets/img/icon/Group 16.png'
import Icon2 from '../../assets/img/icon/Group 33.png'
import Icon3 from '../../assets/img/icon/surface1.png'
import PrevIcon from '../../assets/img/icon/prev.png'
import NextIcon from '../../assets/img/icon/next.png'
import ActivepageNationIcon from '../../assets/img/icon/Path 4.png'
import PageNationIcon from '../../assets/img/icon/Path 5.png'
import Line from '../../assets/img/icon/Line 1.png'

function Hero() {
    const desktop = useMediaQuery("(min-width: 1025px)");
    const mobile = useMediaQuery("(max-width: 600px)");
    const tablet = useMediaQuery("(max-width: 1024px)");

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    };

    const[activeslide, setActiveslide] = React.useState(0)
    const [slide, setSlide] = React.useState()

    return (
        <div>
            <div className='hero-root'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="my-5" style={{textAlign: (mobile|tablet)?"center":"left"}}>
                                <p>
                                    <span className="hero-title-extra text-white">Gaming video</span><br/>
                                    <span className="hero-title text-white"><strong>Streaming Platforms</strong></span>
                                </p>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Slider {...settings} ref={slider => (setSlide(slider))}> 
                                <div className="hero-movie-card w-100">
                                    <div className="hero-movie-overlay-1  p-3 w-100">
                                        <div className="w-100">
                                            <div className="hero-moviecard-top-badge">
                                                <p className="text-white hero-moviecard-top-badge my-0">LIVE</p>
                                            </div>
                                        </div>
                                        <div className="w-100 d-flex justify-content-center py-5">
                                            <div className="hero-moviecard-top-play-button d-flex">
                                                <img src={playIcon} className="m-auto pl-2"/>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={Moviebadge} style={{width:'130px'}}/>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <p className="my-1 text-white hero-moviecard-title"><strong>Equity niche</strong></p>
                                                    <p className="my-1 text-white hero-moviecard-text"> 
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting<br/> 
                                                        industry. Lorem Ipsum has been the industry's standard dummy text<br/> 
                                                        ever since the 1500s, when an unknown printer took a galley of type<br/> 
                                                        and scrambled it to make a type specimen book. 
                                                    </p>
                                                </div>
                                                <img src={MessageIcon}  style={{width:'50px', height:'50px'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>                               
                                <div className="hero-movie-card">
                                    <div className="hero-movie-overlay-2  p-3 w-100">
                                        <div className="w-100">
                                            <div className="hero-moviecard-top-badge">
                                                <p className="text-white hero-moviecard-top-badge my-0">LIVE</p>
                                            </div>
                                        </div>
                                        <div className="w-100 d-flex justify-content-center py-5">
                                            <div className="hero-moviecard-top-play-button d-flex">
                                                <img src={playIcon} className="m-auto pl-2"/>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={Moviebadge} style={{width:'130px'}}/>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <p className="my-1 text-white hero-moviecard-title"><strong>Equity niche</strong></p>
                                                    <p className="my-1 text-white hero-moviecard-text"> 
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting<br/> 
                                                        industry. Lorem Ipsum has been the industry's standard dummy text<br/> 
                                                        ever since the 1500s, when an unknown printer took a galley of type<br/> 
                                                        and scrambled it to make a type specimen book. 
                                                    </p>
                                                </div>
                                                <img src={MessageIcon}  style={{width:'50px', height:'50px'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hero-movie-card">
                                    <div className="hero-movie-overlay-3  p-3 w-100">
                                        <div className="w-100">
                                            <div className="hero-moviecard-top-badge">
                                                <p className="text-white hero-moviecard-top-badge my-0">LIVE</p>
                                            </div>
                                        </div>
                                        <div className="w-100 d-flex justify-content-center py-5">
                                            <div className="hero-moviecard-top-play-button d-flex">
                                                <img src={playIcon} className="m-auto pl-2"/>
                                            </div>
                                        </div>
                                        <div>
                                            <img src={Moviebadge} style={{width:'130px'}}/>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <p className="my-1 text-white hero-moviecard-title"><strong>Equity niche</strong></p>
                                                    <p className="my-1 text-white hero-moviecard-text"> 
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting<br/> 
                                                        industry. Lorem Ipsum has been the industry's standard dummy text<br/> 
                                                        ever since the 1500s, when an unknown printer took a galley of type<br/> 
                                                        and scrambled it to make a type specimen book. 
                                                    </p>
                                                </div>
                                                <img src={MessageIcon}  style={{width:'50px', height:'50px'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            <div className="my-2">
                                <div className="d-flex align-items-center" style={{justifyContent: tablet?"center":"left"}}>
                                    <Image style={{cursor:"pointer"}} src={PrevIcon} onClick={()=>{setActiveslide(activeslide - 1); slide.slickGoTo(activeslide)}}/>
                                    <div style={{cursor:"pointer"}} onClick={()=>{setActiveslide(1); slide.slickGoTo(0)}}>
                                        <p className="position-absolute text-white hero-bottom-text" style={{marginLeft:"10px", marginTop:'5px'}}>01</p>
                                        <Image src={(activeslide == 1)?ActivepageNationIcon:PageNationIcon}/>
                                    </div>
                                    <Image src={Line}/>
                                    <div style={{cursor:"pointer"}} onClick={()=>{setActiveslide(2); slide.slickGoTo(1)}}>
                                        <p className="position-absolute text-white hero-bottom-text" style={{marginLeft:"10px", marginTop:'5px'}}>02</p>
                                        <Image src={(activeslide == 2)?ActivepageNationIcon:PageNationIcon}/>
                                    </div>
                                    <div style={{cursor:"pointer"}} onClick={()=>{setActiveslide(3); slide.slickGoTo(2)}}>
                                        <p className="position-absolute text-white hero-bottom-text" style={{marginLeft:"10px", marginTop:'5px'}}>03</p>
                                        <Image src={(activeslide == 3)?ActivepageNationIcon:PageNationIcon}/>
                                    </div>
                                    <Image style={{cursor:"pointer"}} src={NextIcon} onClick={()=>{setActiveslide(activeslide + 1); slide.slickGoTo(activeslide)}}/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    {
                        (desktop)&&
                            <Row className="mt-5">
                                <Col xs={4}>
                                    <div className="d-flex justify-content-center">
                                        <div className="hero-botto-icon">
                                            <Image src={Icon1} style={{width:'60px'}} className="hero-botto-icon-img"></Image>
                                        </div>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <p className="my-1 text-white hero-bottom-title"><strong>Twitch Streaming</strong></p>
                                        <p className="my-1 text-white hero-bottom-text">New streams every day from<br/>our best players.</p>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div className="d-flex justify-content-center">
                                        <div className="hero-botto-icon">
                                            <Image src={Icon3} style={{width:'60px'}} className="hero-botto-icon-img"></Image>
                                        </div>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <p className="my-1 text-white hero-bottom-title"><strong>Twitch Streaming</strong></p>
                                        <p className="my-1 text-white hero-bottom-text">New streams every day from<br/>our best players.</p>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div className="d-flex justify-content-center">
                                        <div className="hero-botto-icon">
                                            <Image src={Icon2} style={{width:'60px'}} className="hero-botto-icon-img"></Image>
                                        </div>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <p className="my-1 text-white hero-bottom-title"><strong>Twitch Streaming</strong></p>
                                        <p className="my-1 text-white hero-bottom-text">New streams every day from<br/>our best players.</p>
                                    </div>
                                </Col>
                            </Row>
                    }
                    {
                        (tablet && !mobile)&&
                            <Row className="mt-5">
                                <Col xs={4}>
                                    <div className="d-flex justify-content-center">
                                        <div className="hero-botto-icon">
                                            <Image src={Icon1} style={{width:'60px'}} className="hero-botto-icon-img"></Image>
                                        </div>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <p className="my-1 text-white hero-bottom-title"><strong>Twitch Streaming</strong></p>
                                        <p className="my-1 text-white hero-bottom-text">New streams every day from<br/>our best players.</p>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div className="d-flex justify-content-center">
                                        <div className="hero-botto-icon">
                                            <Image src={Icon3} style={{width:'60px'}} className="hero-botto-icon-img"></Image>
                                        </div>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <p className="my-1 text-white hero-bottom-title"><strong>Twitch Streaming</strong></p>
                                        <p className="my-1 text-white hero-bottom-text">New streams every day from<br/>our best players.</p>
                                    </div>
                                </Col>
                                <Col xs={4}>
                                    <div className="d-flex justify-content-center">
                                        <div className="hero-botto-icon">
                                            <Image src={Icon2} style={{width:'60px'}} className="hero-botto-icon-img"></Image>
                                        </div>
                                    </div>
                                    <div className='text-center mt-5'>
                                        <p className="my-1 text-white hero-bottom-title"><strong>Twitch Streaming</strong></p>
                                        <p className="my-1 text-white hero-bottom-text">New streams every day from<br/>our best players.</p>
                                    </div>
                                </Col>
                            </Row>
                    }
                    {
                        (mobile)&&
                            <Slider {...settings}>   
                                <div>
                                    <div className="d-flex justify-content-center">
                                            <div className="hero-botto-icon">
                                                <Image src={Icon1} style={{width:'60px'}} className="hero-botto-icon-img"></Image>
                                            </div>
                                        </div>
                                        <div className='text-center mt-5'>
                                            <p className="my-1 text-white hero-bottom-title"><strong>Twitch Streaming</strong></p>
                                            <p className="my-1 text-white hero-bottom-text">New streams every day from<br/>our best players.</p>
                                        </div>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-center">
                                            <div className="hero-botto-icon">
                                                <Image src={Icon1} style={{width:'60px'}} className="hero-botto-icon-img"></Image>
                                            </div>
                                        </div>
                                        <div className='text-center mt-5'>
                                            <p className="my-1 text-white hero-bottom-title"><strong>Twitch Streaming</strong></p>
                                            <p className="my-1 text-white hero-bottom-text">New streams every day from<br/>our best players.</p>
                                        </div>
                                </div>
                                <div>
                                    <div className="d-flex justify-content-center">
                                            <div className="hero-botto-icon">
                                                <Image src={Icon1} style={{width:'60px'}} className="hero-botto-icon-img"></Image>
                                            </div>
                                        </div>
                                        <div className='text-center mt-5'>
                                            <p className="my-1 text-white hero-bottom-title"><strong>Twitch Streaming</strong></p>
                                            <p className="my-1 text-white hero-bottom-text">New streams every day from<br/>our best players.</p>
                                        </div>
                                </div>
                            </Slider>
                    }
                </Container>
            </div>
        </div>
    )
}

export default Hero
