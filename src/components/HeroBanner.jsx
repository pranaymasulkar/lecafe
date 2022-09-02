import React from "react";

const HeroBanner = () => {
    return (
        <>
            <section className="herobanner">
                <div className="text-center">
                <img
                    src="https://d1uxq5uu95as1y.cloudfront.net/covers/3bd8570f2d74094c_Screen-Shot-2021-03-10-at-3.08.11-PM.png"
                    alt="Le Cafe"
                    className="img-fluid cover"
                />
                </div>
                <div className="herobanner-main">
                <div className="container">
                    <div className="row d-flex align-items-end justify-content-between">
                    <div className="col-12 col-md-8">
                        <div className="herobanner-header-left d-flex justify-content-start">
                        <img
                            src="https://d1uxq5uu95as1y.cloudfront.net/logos/655b1a2a825e03d2_lecafelogo.png?width=300"
                            alt="Le Cafe"
                            className="img-fluid mr-3 float-left"
                        />
                        <div className="ms-3">
                            <h2 className="text-white">Le Cafe</h2>
                            <p className="text-white mb-1">
                            <i className="icofont-location-pin"></i>
                            78 Sazz Street, India
                            <br /> <span className="badge badge-status open">open</span>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="herobanner-header-right text-end">
                        <span className="shop-time">
                            <i className="icofont-clock-time text-capitalize"></i> time:
                            9:00AM - 10:00PM
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default HeroBanner;
