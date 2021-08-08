import React from 'react'
import imageOne from "../images/img1.jpeg"
import imageTwo from "../images/img2.jpeg"

const Content = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center">
            <img className="w-1/3 mb-11" src={imageOne} alt="" />
            <div>
                <h1 className="font-bold text-3xl">Cheesy Pizza</h1>
                <p className="text-xl font-normal text-gray-600 mt-4 mb-2">Crispy, delicious & yummy</p>
                <span className="text-xl text-gray-600">$17</span>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center">
            <img className="w-1/3 my-11" src={imageTwo} alt="" />
            <div className="mb-11">
                <h1 className="font-bold text-3xl">Yummy corn Pizza</h1>
                <p className="text-xl font-normal text-gray-600 mt-4 mb-2">Crispy, delicious & yummy</p>
                <span className="text-xl text-gray-600">$20</span>
            </div>
        </div>
        </>
    )
}

export default Content
