
import { Link } from 'react-router-dom';


import React from 'react'

import RainingText from '@/Components/RainingText'
import B from '../assets/B.gif'
import C from '../assets/C.gif'
import L from '../assets/L.gif'
import N from '../assets/N.gif'
import U from '../assets/U.gif'
import S from '../assets/S.gif'
import video1 from '../assets/1stV.mp4'
import AVid from '@/assets/Video-project/Alphabets/A.mp4'
import ProgressVid from '@/assets/Video-project/Other/ProgressVid.mp4'
import Test from '@/assets/Video-project/Other/Test.webm'
import comp from '@/assets/Video-project/Other/compan.webm'
import Name from '@/Components/Name'


import { FaHandPointDown } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";
// import E from '../assets/E.gif'

import { useAuth } from '@/context/AuthProvider'





// import Navbar from './Navbar'

function Home() {


    const { user, logout } = useAuth();

    const handleLogout = () => {
        logout();
        // Redirect will be handled by the ProtectedRoute
    };

    return (
        <>



            <div className=''>
                <div>

                    <RainingText />
                    <Name />
                </div>




                <div className="relative w-scree z-10 mt-16 md:mt-5 p-5 pt-10 flex flex-col items-center  justify-center gap-4">            


                    <h1 className="text-4xl lg:text-6xl flex flex-col sm:flex-row gap-4 items-center font-bold mb-5 mt-8 text-center"> Welcome to <span className='uppercase text-5xl lg:text-6xl font-bold gradient-text'>Kidz learn</span></h1>


                    <p className=" lg:text-2xl text-lg text-gray-700 mb-5 text-center">
                        Join KidzLe for your Child to make them learn Alphabets, Numbers and many more in a fun and attractive way
                    </p>

                    {/* animates alphabets */}


                    <div className=" flex flex-row overflow-hidden items-center justify-center gap-2  ">

                        <img className=' hover:scale-110' src={B} alt='B letter' />
                        <img className=' hover:scale-110' src={C} alt='C letter' />
                        <img className='hidden sm:flex  hover:scale-110' src={L} alt='L letter' />
                        <img className='hidden lg:flex hover:scale-110' src={N} alt='B letter' />
                        <img className='hidden xl:flex hover:scale-110' src={S} alt='B letter' />
                        <img className='hidden xl:flex hover:scale-110' src={U} alt='B letter' />

                    </div>

                    <div className='mt-5 mb-5 flex gap-5 flex-col text-center'>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-blu/60'> Learning Made Fun for Little Ones!</h2>

                        <div className='mt-2 p-2 flex flex-col'>
                            <p className='text-2xl lg:text-4xl mb-5'>Helping Kids Discover the Magic of Alphabets and Numbers!</p>

                            <p className='text-2xl lg:text-3xl font-light mb-5'>Join KidsLe today for your child</p>

                            <div className='flex items-center justify-center gap-5 flex-col sm:flex-row'>

                                <span className='sm:hidden text-2xl'>   <FaHandPointDown /></span>
                                <span className='hidden sm:flex text-2xl'><FaHandPointRight />  </span>

                                <div className=" flex gap-10  ">
                                    <Link
                                    
                                        to="/login"
                                        className="bg-yello hover:bg-yello/80 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 animate-pulse hover:animate-none"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="bg-yello hover:bg-yello/80 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 animate-pulse hover:animate-none"
                                    >
                                        Register
                                    </Link>
                                </div>


                            </div>

                        </div>



                    </div>

                    <div className="w-full max-w-7xl mx-auto p-4">
                        <h2 className="text-4xl font-bold text-center  gradient-text">Why Choose KidsLe?</h2>

                        {/* Card 1 - Left Image */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mt-6 mb-12">
                            <div className="w-full md:w-1/2">
                                <video className="rounded-lg shadow-lg w-full h-64 object-cover" preload='auto' muted autoPlay
                                    loop>
                                    <source src={AVid} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="w-full md:w-1/2 text-center md:text-left">

                                <div className='flex flex-col gap-5 items-center text-center justify-center mb-4'>

                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blu ">Animated Alphabet Adventures</h3>

                                </div>

                                <p className="text-gray-700 lg:text-xl text-center">Watch letters come to life through engaging animations! Our carefully crafted videos make learning the alphabet an exciting journey for your little ones.</p>
                            </div>
                        </div>

                        {/* Card 2 - Right Image */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8 mb-12">
                            <div className="w-full md:w-1/2">
                                <video className="rounded-lg shadow-lg w-full h-64 object-cover" preload='auto' muted autoPlay
                                    loop >
                                    <source src={comp} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h3 className="text-2xl sm:text-3xl  lg:text-4xl font-bold text-center text-blu mb-4">Cartoon Teaching Companions</h3>
                                <p className="text-gray-700 lg:text-xl text-center">Learn with friendly cartoon characters who guide children through fun-filled educational adventures, making every lesson memorable and enjoyable.</p>
                            </div>
                        </div>

                        {/* Card 3 - Left Image */}
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
                            <div className="w-full md:w-1/2">
                                <video className="rounded-lg shadow-lg w-full h-64 object-cover" preload='auto' muted autoPlay
                                    loop>
                                    <source src={Test} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h3 className="text-2xl sm:text-3xl  lg:text-4xl font-bold text-blu mb-4 text-center ">Interactive Practice Tests</h3>
                                <p className="text-gray-700 lg:text-xl text-center">Reinforce learning with our interactive practice sessions. Fun quizzes and exercises help children master what they've learned through engaging activities.</p>
                            </div>
                        </div>

                        {/* Card 4 - Right Image */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
                            <div className="w-full md:w-1/2">
                                <video className="rounded-lg shadow-lg w-full h-64 object-cover" preload='auto' muted autoPlay
                                    loop>
                                    <source src={ProgressVid} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="w-full md:w-1/2 text-center md:text-left">
                                <h3 className="text-2xl sm:text-3xl  lg:text-4xl text-center font-bold text-blu mb-4">Progress Tracking</h3>
                                <p className="text-gray-700 lg:text-xl text-center" >Monitor your child's learning journey with detailed progress tracking. Watch them grow and celebrate their achievements every step of the way.</p>
                            </div>
                        </div>
                    </div>


                    {/* line space */}
                    <div className="w-full mx-auto my-12 px-4">
                        <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-purpl via-orang to-pin animate-pulse"></div>
                        </div>
                    </div>



                    {/* FAQ Section */}
                    <div className="bg-gray-50 py-16" data-aos="fade-up" data-aos-duration="1000">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-blu mb-12 animate-fadeIn">Frequently Asked Questions</h2>

                            <div className="space-y-8 max-w-3xl mx-auto">
                                <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105" data-aos="fade-right" data-aos-delay="100">
                                    <div className='flex gap-3 items-center'>
                                        <FaBullhorn className='text-3xl sm:text-lg' />
                                        <h3 className="text-xl font-semibold text-blu mb-2">
                                            What age group is this platform suitable for?</h3>
                                    </div>


                                    <p className="text-gray-700">Our platform is designed for children aged 3-8 years, with content specifically tailored to different developmental stages.</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105" data-aos="fade-right" data-aos-delay="200">
                                    <div className='flex gap-3 items-center'>
                                        <FaBullhorn className=' text-3xl sm:text-lg' />
                                        <h3 className="text-xl font-semibold text-blu mb-2">
                                            What age group is this platform suitable for?</h3>
                                    </div>
                                    <p className="text-gray-700">We regularly update our content library with new videos, activities, and exercises on a weekly basis to keep learning fresh and engaging.</p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105" data-aos="fade-right" data-aos-delay="300">
                                    <div className='flex gap-3 items-center'>
                                        <FaBullhorn className='text-3xl sm:text-lg' />
                                        <h3 className="text-xl font-semibold text-blu mb-2">
                                            What age group is this platform suitable for?</h3>
                                    </div>
                                    <p className="text-gray-700">Yes! Our platform includes comprehensive progress tracking features that allow you to monitor your child's learning journey and achievements.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* line space */}
                    <div className="w-full mx-auto my-12 px-4">
                        <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-purpl via-orang to-pin animate-pulse"></div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-5 max-w-7xl items-center p-5'>
                        <h4 className='text-2xl font-thin '>Login Now to Start Learning</h4>
                        <Link
                            to="/login"
                            className="bg-yello w-full text-2xl text-center hover:bg-yello/80 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 animate-pulse hover:animate-none"
                        >
                            Login
                        </Link>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-white py-16" data-aos="fade-up" data-aos-duration="1000">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-blu mb-12 animate-fadeIn">Contact Us</h2>

                            <div className="max-w-3xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="text-center md:text-left transform transition duration-300 hover:scale-105" data-aos="fade-right" data-aos-delay="100">
                                        <h3 className="text-xl font-semibold text-blu mb-4">Get in Touch</h3>
                                        <p className="text-gray-700 mb-4">Have questions or feedback? We'd love to hear from you!</p>
                                        <div className="space-y-2">
                                            <p className="text-gray-700 hover:text-blu transition duration-300"><span className="font-semibold">Email:</span> support@kidsle.com</p>
                                            <p className="text-gray-700 hover:text-blu transition duration-300"><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
                                            <p className="text-gray-700 hover:text-blu transition duration-300"><span className="font-semibold">Hours:</span> Mon-Fri, 9AM-5PM EST</p>
                                        </div>
                                    </div>

                                    <form className="space-y-4 transform transition duration-300" data-aos="fade-left" data-aos-delay="200">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blu focus:ring-2 focus:ring-blu focus:ring-opacity-50 transition duration-300 bg-back"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blu focus:ring-2 focus:ring-blu focus:ring-opacity-50 transition duration-300 bg-back"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                placeholder="Your Message"
                                                rows="4"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blu focus:ring-2 focus:ring-blu focus:ring-opacity-50 transition duration-300 bg-back"
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-orang border border-purpl text-white font-semibold py-2 px-4 rounded-lg transform transition duration-300 hover:scale-105 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blu"
                                        >
                                            Send Message
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* rights reserved */}
                    <div className="w-full  mx-auto my-12 px-4">
                        <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-purpl via-orang to-pin animate-pulse  "></div>
                        </div>
                    </div>




                </div>



                <footer id='preven' className="relative  z-20 bg-gray-800 dark:bg-gray-100 text-gray-100 dark:text-gray-800">

                    <div className="container flex flex-col items-center gap-5 justify-around py-10 px-4 mx-auto space-y-8 lg:flex-row lg:space-y-0">

                        <div className="lg:w-1/3 flex flex-col  items-center ">
                            <a rel="noopener noreferrer" href="#" className="flex justify-center gap-2 lg:justify-start items-center">

                                <div className="flex text-center items-center justify-center  rounded-full bg-whit/10 dark:bg-green-600 lg:w-26 lg:h-24">
                                    <img
                                        src="./src/assets/file.png"
                                        alt="KidsLe Logo"
                                        className="w-18 h-16 mx-auto mb-2  "
                                    />
                                </div>
                                <div className=" text-2xl font-semibold">KidsLe</div>

                            </a>
                        </div>


                        <div className="grid grid-cols-2 gap-5 text-sm lg:w-2/3 sm:grid-cols-4">
                            <div className="space-y-3">
                                <h3 className="tracking-wide font-semibold uppercase text-gray-50 dark:text-gray-900">KidsLE</h3>
                                <ul className="space-y-1 text-darkg">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Learning</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Games</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Quizes</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Parent Support</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="tracking-wide font-semibold uppercase text-gray-50 dark:text-gray-900">About</h3>
                                <ul className="space-y-1 text-darkg">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Privacy</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="uppercase font-semibold text-gray-50 dark:text-gray-900">Blog</h3>
                                <ul className="space-y-1 text-darkg">

                                    <li>
                                        <a rel="noopener noreferrer" href="#">Documentation</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Guides</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="uppercase text-gray-50 dark:text-gray-900 font-semibold">Social media</div>
                                <div className="flex justify-start space-x-3">
                                    <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                            <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                                        </svg>
                                    </a>
                                    <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current">
                                            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                                        </svg>
                                    </a>
                                    <a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 fill-current">
                                            <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" bg-purpl/50 bg-gray-100 w-screen">

                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                            <div className="flex flex-col sm:flex-row justify-between py-2">

                                <div className="text-center sm:text-left">
                                    <p className="text-back  text-sm">
                                        © {new Date().getFullYear()} KidsLe. All rights reserved.
                                    </p>
                                </div>

                                <div className="text-center sm:text-right">
                                    <p className="text-gray-600 text-sm text-back ">
                                        Made with ❤️ for little learners
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </footer>
            </div>



        </>
    )
}

export default Home
