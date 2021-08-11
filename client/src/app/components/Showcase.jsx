import React from 'react';
import overlord from 'assets/images/poster/overlord.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

function Showcase() {
    return (
        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-12">
                    <h1 className="showcase-heading">Showcase</h1>
                    <Swiper 
                        slidesPerView={4}
                        className="pb-4">
                        <SwiperSlide className="showcase-box">
                            <div className="poster">
                                <img src={overlord} alt="showcase--image" />
                            </div>
                            <div className="description">
                                <div className="h5">Overlord</div>
                                <div className="w-100">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est nulla quasi deleniti repudiandae incidunt voluptates autem nihil, dolores minima asperiores maiores voluptatum perferendis. Unde voluptatem iure sit voluptates incidunt deleniti?</p>
                                </div>
                            </div>
                            <div className="actions">
                                <span className="author text-muted mr-2">
                                    <i className='bx bx-user-circle'></i>{' '}
                                    FZ-Dev
                                </span>
                                <span className="time text-muted">
                                    <i className='bx bx-time-five'></i>{' '}
                                    20.30
                                </span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Showcase
