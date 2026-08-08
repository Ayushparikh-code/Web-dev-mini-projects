


import React from 'react'
import { HiBadgeCheck } from "react-icons/hi";
import { HiBan } from "react-icons/hi";
import KidsLearningChatbot from './Learn/KidsLearningChatbot';
import VoiceAIChat from './Learn/VoiceAIChat';




function Learn() {

  return (
    <>

      <div className="p-5 pt-20 bg-sky/70 w-screen mx-auto flex flex-col  min-h-screen gap-10 lg:flex-row lg:justify-center ">


        <div className='p-2 flex flex-col mx-auto lg:pt-10 lg:gap-10 '>

          <h1 className="text-4xl font-bold rounded-xl animate-bounce bg-sky text-blu mb-4 p-5 shadow shadow-whit">Learning made Easy </h1>

          <div className='flex flex-col gap-2'>
            <h3 className='text-2xl mb-2'>Instructions - </h3>

            <span className='flex gap-4 items-center'> <HiBadgeCheck /> <p> Enter ALPHABETS to learn alphabet</p> </span>

            <span className='flex gap-4 items-center'> <HiBadgeCheck /> <p>Enter NUMBERS to learn number</p> </span>
            <span className='flex gap-4 items-center'> <HiBadgeCheck /> <p>Enter NEXT to go to next object</p> </span>

            <span className='flex gap-4 items-center'> <HiBan /> <p>Keywords other than this will be not responded</p></span>

          </div>



          <VoiceAIChat />


        </div>

        <KidsLearningChatbot />

      </div>

    </>
  )
}

export default Learn
