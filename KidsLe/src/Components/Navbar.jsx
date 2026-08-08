import { Link } from 'react-router-dom'
import { useState } from 'react';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    return (
        <>

            <nav className="z-20 fixed top-[10%] h-[80%] my-auto rounded-r-xl text-white p-6 hidden bg-sky md:flex md:w-auto flex-col items-center justify-center pt-10">
                <div className='flex flex-col my-auto'>
                    {/* Logo Section */}
                    <div className="mb-5  text-center flex items-center justify-center gap-1 lg:gap-2 ">
                        <img
                            src="./src/assets/file.png"
                            alt="KidsLe Logo"
                            className="w-10 h-10 mx-auto mb-2 lg:w-14 lg:h-14"
                        />
                        <Link to="/" className="text-2xl font-bold">
                            KidsLe
                        </Link>
                    </div>


                    {/* Navigation Links */}
                    <div className="flex flex-col space-y-4">


                        <Link
                            to="/Learn"
                            className="flex items-center space-x-3 p-2 hover:bg-blu/10 rounded-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>Learn</span>
                        </Link>

                        <Link
                            to="/Games"
                            className="flex items-center space-x-3 p-2 hover:bg-blu/10 rounded-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Games</span>
                        </Link>

                        <Link
                            to="/Progress"
                            className="flex items-center space-x-3 p-2 hover:bg-blu/10 rounded-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span>Progress</span>
                        </Link>
                        <Link
                            to="/Quizes"
                            className="flex items-center space-x-3 p-2 hover:bg-blu/10 rounded-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span>Quizes</span>
                        </Link>
                        <Link
                            to="/Account"
                            className="flex items-center space-x-3 p-2 hover:bg-blu/10 rounded-lg"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span>Account</span>
                        </Link>
                    </div>


                </div>



            </nav>

            {/* Hamburger menu */}

            <nav className='md:hidden z-20 fixed flex items-center justify-between top-0 w-screen bg-gray-800 text-white p-5 bg-sky '>

                <div className="text-center flex items-center gap-3">
                    <img
                        src="./src/assets/file.png"
                        alt="KidsLe Logo"
                        className="w-16 h-16"
                    />
                    <Link to="/" className="text-2xl font-bold">
                        KidsLe
                    </Link>
                </div>


                {/* Mobile fit */}
                <div className="">
                    <button
                        onClick={toggleMenu}
                        className="p-2  rounded-md hover:bg-blue-700 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>

                    <div className={`${isOpen ? 'left-[5%]' : 'hidden'}  absolute  transition-transform text-center top-16 w-[90%] bg-sky/50 backdrop-blur-md p-4 shadow-lg  rounded-3xl`}>
                        <div className="flex flex-col items-center space-y-4">


                            <Link
                                to="/Learn"
                                className="flex items-center justify-center min-w-full  space-x-4 p-2 hover:bg-sky rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                <span>Learn</span>
                            </Link>

                            <Link
                                to="/Games"
                                className="flex justify-center min-w-full  items-center space-x-4 p-2 hover:bg-sky rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Games</span>
                            </Link>

                            <Link
                                to="/Progress"
                                className="flex justify-center min-w-full  items-center space-x-4 p-2 hover:bg-sky rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                                <span>Progress</span>
                            </Link>
                            <Link
                                to="/Quizes"
                                className="flex justify-center min-w-full  items-center space-x-4 p-2 hover:bg-sky rounded-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                <span>Quizes</span>
                            </Link>

                            <Link
                                to="/Account"
                                className="flex justify-center min-w-full  items-center space-x-4 p-2 hover:bg-sky rounded-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                <span>Account</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
