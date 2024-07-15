import React from 'react';
import ml from './ml.png';
import ai from './intro to AI.png';
import dl from './intro to DL.png';
const CertificatesSection = () => {
    return (
        <section id="certificates">
            <div className="profession" style={{ backgroundColor: '#22252c' }}>
                <h2 style={{ marginBottom: '30px', textAlign: 'center', color: 'aquamarine', padding: '60px' }}>CERTIFICATES</h2>

                <div id="certification">
                    <div>
                        <div className="cards-container">
                            
                            <div className="card card_certificate">
                                <div className="card-title">01.</div>
                                <div className="card-subtitle">Intro to Machine Learning</div>
                                <img src={ml} alt="Career Essentials" />
                                </div>
                                
                            <div className="card card_certificate">
                                <div className="card-title">02.</div>
                                <div className="card-subtitle">Intro to Deep Learning</div>
                                <img src={dl} alt="What is Generative AI?" />
                                </div>
                            <div className="card card_certificate">
                                <div className="card-title">03.</div>
                                <div className="card-subtitle">Introduction to Artificial Intelligence</div>
                                <img src={ai} alt="Introduction to AI" />
                            </div>
                        </div>
                    </div>
                    <br />
                </div>

            </div>
        </section>
    );
}

export default CertificatesSection;
