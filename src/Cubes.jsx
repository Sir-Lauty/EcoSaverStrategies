import React from 'react';
import './Cubes.css';

const Cubes = () => {
    return(
        <div class="col-lg-7">
        <div class="row g-4">
            <div class="col-md-6">
                <div class="row g-4">
                    <div class="col-12 wow fadeIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;">
                        <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div class="service-icon btn-square">
                                <i class="fa fa-power-off fa-2x"></i>
                            </div>
                            <h5 class="mb-3"></h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                diam sed stet lorem.</p>
                            <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;">
                        <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div class="service-icon btn-square">
                                <i class="fa fa-power-off fa-2x"></i>
                            </div>
                            <h5 class="mb-3">Machine learning</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                diam sed stet lorem.</p>
                            <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 pt-md-4">
                <div class="row g-4">
                    <div class="col-12 wow fadeIn" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;">
                        <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div class="service-icon btn-square">
                                <i class="fa fa-graduation-cap fa-2x"></i>
                            </div>
                            <h5 class="mb-3">Education &amp; Science</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                diam sed stet lorem.</p>
                        </div>
                    </div>
                    <div class="col-12 wow fadeIn" data-wow-delay="0.7s" style="visibility: visible; animation-delay: 0.7s; animation-name: fadeIn;">
                        <div class="service-item d-flex flex-column justify-content-center text-center rounded">
                            <div class="service-icon btn-square">
                                <i class="fa fa-brain fa-2x"></i>
                            </div>
                            <h5 class="mb-3">Predictive Analysis</h5>
                            <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet
                                diam sed stet lorem.</p>
                            <a class="btn px-3 mt-auto mx-auto" href="">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}