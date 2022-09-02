import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import Searchbar from './Searchbar';
import { FaArrowRight } from "react-icons/fa";
import { BiFoodTag } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Data2 from '../Data/Data2';


const Filter = () => {
    const [catname, setCatname] = useState('Recommended');
    const [items, setItems] = useState(Data2);
    const filterItem = (categoryItems) => {
        const uploadItems = Data2.filter((curElem) => {
            return curElem.category === categoryItems;
        });
        setItems(uploadItems);
        setCatname(categoryItems);
    }

    return (
        <>
            <section className="filter-main-tab pt-2 mt-4">
                <Container>
            
                    <Row>
                        <Col xs={12} md={4} className="menu-sidebar">
                            <div className="menu filters shadow rounded bg-white mb-4 d-none d-md-block">
                                <div className="filters-header border-bottom ps-4 pe-4 pt-3 pb-3">
                                    <h5 className="m-0 text-capitalize">
                                        menu
                                    </h5>
                                </div>
                                <div className="menu-area scroll-box">
                                    <div className="menu-item"><button onClick={() => setItems(Data2)} className="tabbtn active">Recommended <span className="float-end"><FaArrowRight/></span></button></div>
                                    <div className="menu-item"><button onClick={() => filterItem('Soup')} className="tabbtn">Soup <span className="float-end"><FaArrowRight/></span></button></div>
                                    <div className="menu-item"><button onClick={() => filterItem('Coffee')} className="tabbtn">Coffee <span className="float-end"><FaArrowRight/></span></button></div>
                                    <div className="menu-item"><button onClick={() => filterItem('Tea')} className="tabbtn">Tea <span className="float-end"><FaArrowRight/></span></button></div>
                                    <div className="menu-item"><button onClick={() => filterItem('Pizza And Pasta')} className="tabbtn">Pizza and Pasta <span className="float-end"><FaArrowRight/></span></button></div>
                                </div>
                            </div>
                            <div className="d-block d-md-none">
                                <div className="menuitems">
                                    <Dropdown>
                                        <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                            <HiOutlineMenuAlt2 className="me-2"/> Menu
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => setItems(Data2)}>Recommended</Dropdown.Item>
                                            <Dropdown.Item onClick={() => filterItem('Soup')}>Soup</Dropdown.Item>
                                            <Dropdown.Item onClick={() => filterItem('Coffee')}>Coffee</Dropdown.Item>
                                            <Dropdown.Item onClick={() => filterItem('Tea')}>Tea</Dropdown.Item>
                                            <Dropdown.Item onClick={() => filterItem('Pizza And Pasta')}>Pizza And Pasta</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={8} className="main-content">
                            <div className="main-content-body-left">
                                <Searchbar/>

                                <div id="Soup">
                                    <Row>
                                        <Col xs={12}>
                                        <h5 className="mb-4 mt-3">{catname}</h5>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="bg-white rounded border shadow mb-4">
                                                {
                                                    items.map((elem) => {
                                                        const { id, name, image, FoodType, description, price } = elem;
                                                        return(
                                                            <div key={id} className="menu-list p-3 border-bottom">
                                                                <div className="media">
                                                                    <img src={image} alt="Spinach Mushroom Soup" className="me-3 rounded-pill"/> 
                                                                    <div className="media-body">
                                                                        <h6 className="mb-1">
                                                                            <BiFoodTag className={`me-1 food-type ${FoodType}`}/>
                                                                            {name}
                                                                        </h6>
                                                                        <span className="text-muted" ></span> 
                                                                        <p className="text-gray mb-0">
                                                                        ₹ {price} Rs.
                                                                        </p>
                                                                        <p className='mb-1'>{description}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                {/* <div id="Coffee">
                                    <Row>
                                        <Col xs={12}>
                                            <h5 className="mb-4 mt-3">
                                                <div className="cat-title">
                                                <span>Coffee</span> <small className="h6 text-black-50 ps-1 item-count text-uppercase">(3 items)</small> 
                                                </div>
                                            </h5>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="bg-white rounded border shadow mb-4">
                                                {
                                                    items.map((elem) => {
                                                        const { id, title, image, body, user_id } = elem;
                                                        return(
                                                            <div className="menu-list p-3 border-bottom">
                                                                <div className="media">
                                                                    <img src="https://d1uxq5uu95as1y.cloudfront.net/products/22f652443a8bac3d_11spenichsoup.jpeg?width=300" alt="Spinach Mushroom Soup" className="me-3 rounded-pill"/> 
                                                                    <div className="media-body">
                                                                        <h6 className="mb-1"><span className="me-1 food-type veg"><i className="icofont-ui-press food-item"></i></span> Spinach Mushroom Soup
                                                                        <span ></span>
                                                                        </h6>
                                                                        <span className="text-muted" ></span> 
                                                                        <p className="text-gray mb-0">
                                                                        ₹ 240.00
                                                                        - 300 mililitre
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div id="Tea">
                                    <Row>
                                        <Col xs={12}>
                                        <h5 className="mb-4 mt-3">
                                            <div className="cat-title">
                                            <span>Tea</span> <small className="h6 text-black-50 ps-1 item-count text-uppercase">(2 items)</small> 
                                            </div>
                                        </h5>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="bg-white rounded border shadow mb-4">
                                                {
                                                    items.map((elem) => {
                                                        const { id, title, image, body, user_id } = elem;
                                                        return(
                                                            <div className="menu-list p-3 border-bottom">
                                                                <div className="media">
                                                                    <img src="https://d1uxq5uu95as1y.cloudfront.net/products/22f652443a8bac3d_11spenichsoup.jpeg?width=300" alt="Spinach Mushroom Soup" className="me-3 rounded-pill"/> 
                                                                    <div className="media-body">
                                                                        <h6 className="mb-1"><span className="me-1 food-type veg"><i className="icofont-ui-press food-item"></i></span> Spinach Mushroom Soup
                                                                        <span ></span>
                                                                        </h6>
                                                                        <span className="text-muted" ></span> 
                                                                        <p className="text-gray mb-0">
                                                                        ₹ 240.00
                                                                        - 300 mililitre
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div id="Pizza_and_Pasta">
                                    <Row>
                                        <Col xs={12}>
                                        <h5 className="mb-4 mt-3">
                                            <div className="cat-title">
                                            <span>Pizza and Pasta</span> <small className="h6 text-black-50 ps-1 item-count text-uppercase">(3 items)</small> 
                                            </div>
                                        </h5>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="bg-white rounded border shadow mb-4">
                                                {
                                                    items.map((elem) => {
                                                        const { id, title, image, body, user_id } = elem;
                                                        return(
                                                            <div className="menu-list p-3 border-bottom">
                                                                <div className="media">
                                                                    <img src="https://d1uxq5uu95as1y.cloudfront.net/products/22f652443a8bac3d_11spenichsoup.jpeg?width=300" alt="Spinach Mushroom Soup" className="me-3 rounded-pill"/> 
                                                                    <div className="media-body">
                                                                        <h6 className="mb-1"><span className="me-1 food-type veg"><i className="icofont-ui-press food-item"></i></span> Spinach Mushroom Soup
                                                                        <span ></span>
                                                                        </h6>
                                                                        <span className="text-muted" ></span> 
                                                                        <p className="text-gray mb-0">
                                                                        ₹ 240.00
                                                                        - 300 mililitre
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                                <div id="Recommended">
                                    <Row>
                                        <Col xs={12}>
                                        <h5 className="mb-4 mt-3">
                                            <div className="cat-title">
                                            <span>Recommended</span> <small className="h6 text-black-50 ps-1 item-count text-uppercase">(2 items)</small> 
                                            </div>
                                        </h5>
                                        </Col>
                                        <Col xs={12}>
                                            <div className="bg-white rounded border shadow mb-4">
                                                {
                                                    items.map((elem) => {
                                                        const { id, title, image, body, user_id } = elem;
                                                        return(
                                                            <div className="menu-list p-3 border-bottom">
                                                                <div className="media">
                                                                    <img src="https://d1uxq5uu95as1y.cloudfront.net/products/22f652443a8bac3d_11spenichsoup.jpeg?width=300" alt="Spinach Mushroom Soup" className="me-3 rounded-pill"/> 
                                                                    <div className="media-body">
                                                                        <h6 className="mb-1"><span className="me-1 food-type veg"><i className="icofont-ui-press food-item"></i></span> Spinach Mushroom Soup
                                                                        <span ></span>
                                                                        </h6>
                                                                        <span className="text-muted" ></span> 
                                                                        <p className="text-gray mb-0">
                                                                        ₹ 240.00
                                                                        - 300 mililitre
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                </div>  */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Filter