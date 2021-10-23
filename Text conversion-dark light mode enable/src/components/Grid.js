import React from 'react'
import './App1.css';

export default function Grid() {
    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <div className="container">
                <h1 className="heading ">About</h1>
                <div className="row my-3">
                    <div className="col">
                        Column
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatum nemo vitae sequi! Reiciendis suscipit consequuntur numquam.
                        Praesentium vero consequuntur, voluptas, debitis et blanditiis, optio ex corrupti recusandae ratione nemo!
                        Dolorem harum pariatur officiis aliquid itaque neque suscipit sunt perferendis laboriosam! Doloribus libero error minus suscipit iusto
                        fugit et ipsam enim eaque nemo, voluptatibus soluta quisquam itaque adipisci, atque fuga.
                        <br></br>
                        <br></br>
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                    <div className="col">
                        <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt=".../" />
                    </div>
                </div>
            </div>


            <div className="container  my-5">
                <h1 className='heading'>Upcoming Events</h1>
                <div className="row my-3">
                    <div className="col">
                        <img className="upcomingimg" src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt=".../" />
                    </div>
                    <div className="col event">
                        Column
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatum nemo vitae sequi! Reiciendis suscipit consequuntur numquam.
                        Praesentium vero consequuntur, voluptas, debitis et blanditiis, optio ex corrupti recusandae ratione nemo!
                        Dolorem harum pariatur officiis aliquid itaque neque suscipit sunt perferendis laboriosam! Doloribus libero error minus suscipit iusto
                        fugit et ipsam enim eaque nemo, voluptatibus soluta quisquam itaque adipisci, atque fuga.
                    </div>
                </div>

                

                <div className="UpEvent">
                    <div className="row ">
                        <div className="col event">
                            Column
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatum nemo vitae sequi! Reiciendis suscipit consequuntur numquam.
                            Praesentium vero consequuntur, voluptas, debitis et blanditiis, optio ex corrupti recusandae ratione nemo!
                            Dolorem harum pariatur officiis aliquid itaque neque suscipit sunt perferendis laboriosam! Doloribus libero error minus suscipit iusto
                            fugit et ipsam enim eaque nemo, voluptatibus soluta quisquam itaque adipisci, atque fuga.
                        </div>
                        <div className="col">
                            <img className="upcomingimg" src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt=".../" />
                        </div>
                    </div>

                    <div className="row my-3">
                        <div className="col">
                            <img className="upcomingimg" src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg" alt=".../" />
                        </div>
                        <div className="col event">
                            Column
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatum nemo vitae sequi! Reiciendis suscipit consequuntur numquam.
                            Praesentium vero consequuntur, voluptas, debitis et blanditiis, optio ex corrupti recusandae ratione nemo!
                            Dolorem harum pariatur officiis aliquid itaque neque suscipit sunt perferendis laboriosam! Doloribus libero error minus suscipit iusto
                            fugit et ipsam enim eaque nemo, voluptatibus soluta quisquam itaque adipisci, atque fuga.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
