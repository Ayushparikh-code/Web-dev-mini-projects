import React from 'react'

export default function Footer(props) {
    return (
        <div className="foot-sec container" style={{ backgroundColor: 'wheat' }}>
            <div className='Footer container' style={{ padding: '3vw' }}>
                <div className="row">
                    <div className="col">
                        <div className="card" style={{ width: '18rem' }}>
                            <img style={{height:'14vw'}} src="https://www.who.int/images/default-source/imported/contact-us.tmb-1200v.jpg?sfvrsn=fa0e6c6e_6" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Contact Us</h5>
                                <h6>We are here to solve your queries and register your complains</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="todo" target='_blank' className="btn btn-primary">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: '18rem' }}>
                            <img style={{height:'14vw'}} src="https://image.shutterstock.com/image-photo/about-us-details-contact-data-260nw-377373607.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">About Us</h5>
                                <h6>News UptoDate ...Know us better by clicking here...</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="todo" className="btn btn-primary">Know us better</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card" style={{ width: '18rem' }}>
                            <img style={{height:'14vw'}} src="data:image/png;base64,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" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Follow Us</h5>
                                <h6>Follow us for more and latest updates..up to date</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="todo" className="btn btn-primary">Follow us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
