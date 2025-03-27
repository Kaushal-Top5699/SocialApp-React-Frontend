import React, { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import nodejsLogo from '../../assets/nodejs.png'
import javascriptLogo from '../../assets/javascript.png'
import javaLogo from '../../assets/001-java.png'
import springbootLogo from '../../assets/spring.png'
import searchIcon from '../../assets/search-2.svg'
import dropDownArrow from '../../assets/drop-down.svg'
import kaushalImage from '../../assets/kaushal-2.png'
import cancelIcon from '../../assets/cancel-1.svg'
import videoIcon from '../../assets/video-icon-2.png'
import imageIcon from '../../assets/image-icon-1.png'

export const Navbar = () => {

    const [showCreatePostPopup, setShowCreatePostPopup] = useState(false)

    const createPost = () => {
        setShowCreatePostPopup(!showCreatePostPopup)
    }

    return (
        <>
            <div className='bg-white w-[100%] h-20 flex items-center justify-between'>
                <div className='w-[20%] h-[100%]
                                flex justify-center items-center'>
                        <div className='flex justify-center items-center space-x-4'>
                            <img className='w-10 h-10 transition-transform duration-200 hover:scale-110 cursor-pointer' 
                                src={reactLogo} alt='react-logo'/>
                            <img className='w-10 h-10 transition-transform duration-200 hover:scale-110 cursor-pointer' 
                                src={nodejsLogo} alt='nodejs-logo'/>
                            <img className='w-12 h-12 transition-transform duration-200 hover:scale-110 cursor-pointer' 
                                src={javascriptLogo} alt='javascript-logo'/>
                            <img className='w-10 h-10 transition-transform duration-200 hover:scale-110 cursor-pointer' 
                                src={javaLogo} alt='java-logo'/>
                            <img className='w-10 h-10 transition-transform duration-200 hover:scale-110 cursor-pointer' 
                                src={springbootLogo} alt='spring-logo'/>
                        </div>
                </div>
                <div className='w-[60%] h-[100%] flex justify-center items-center'>
                    <div className='w-[70%] h-12 bg-gray-100 rounded-md flex justify-center items-center'>
                        <img className='w-5 h-5 ml-3' src={searchIcon} alt='search-icon'/>
                        <input className='bg-gray-100 h-[100%] w-[100%] rounded-md text-sm outline-none' type='text' placeholder=' Search' />
                    </div>
                    <div className='w-[30%] h-12 flex justify-center items-center space-x-4'>
                        <button className='bg-blue-200 w-[50%] h-12 ml-4
                                text-blue-700 rounded-md text-sm hover:bg-blue-300 hover:text-blue-800'
                                onClick={createPost}
                                >Create Post</button>
                        <button className='bg-blue-200 w-[50%] h-12 
                                text-blue-700 rounded-md text-sm hover:bg-blue-300 hover:text-blue-800'
                                >Add Story</button>
                    </div>
                </div>
                <div className='w-[20%] h-[100%]
                                flex justify-center items-center space-x-2'>
                    <div>
                        <img className='w-10 h-10 rounded-full transition-transform duration-200 hover:scale-110 cursor-pointer' 
                            src={kaushalImage} alt='user-image'/>
                    </div>
                    <div>
                        <p className='text-sm font-light hover:underline cursor-pointer'>Kaushal Topinkatti</p>
                    </div>
                    <div>
                        <img className='w-5 h-5' src={dropDownArrow} alt='drop-down-arrow'/>
                    </div>
                </div>            
            </div>
            { showCreatePostPopup && (
               <div className='create-post fixed top-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-50 z-50 flex items-center justify-center'>
                    <div className='w-[50%] h-[50%] bg-white border-[0.5px] border-gray-300 rounded-xl'>
                        <div className='section-1 flex justify-between items-center p-4 h-[12%]'>
                            <div className='user-info flex items-center space-x-2'>
                                <div className='user-image'>
                                    <img className='w-8 h-8 rounded-full' src={kaushalImage} alt='user-image'/>
                                </div>
                                <div className='user-name'>
                                    <p>Kaushal Topinkatti</p>
                                </div>
                            </div>
                            <div className='cancel-btn'>
                                <button onClick={createPost}><img className='w-8 h-8' src={cancelIcon} alt='cancel-btn'/></button>
                            </div>
                        </div>
                        <div className='section-2 p-4 h-[64%]'>
                            <textarea className='bg-gray-100 rounded-md resize-none w-[100%] h-[100%] p-4' placeholder="What's on your mind?"></textarea>
                        </div>
                        <div className='section-3 h-[10%] flex items-center space-x-8 pl-4 border-b-[0.5px] border-gray-400'>
                            <p className='text-sm text-gray-600'>Add to your post</p>
                            <button className='flex items-center justify-center font-medium  
                                    bg-gray-100 w-24 h-7 rounded-md text-gray-600 hover:bg-blue-200 hover:text-blue-600 text-sm
                                    transition-colors duration-200 ease-in-out'>
                                <img className='w-4 h-4 mr-2' src={imageIcon} alt='image-icon'/>Image</button>
                            <button className='flex items-center justify-center font-medium 
                                    bg-gray-100 w-24 h-7 rounded-md text-gray-600 hover:bg-blue-200 hover:text-blue-600 text-sm
                                    transition-colors duration-200 ease-in-out'>
                                <img className='w-5 h-5 mr-2' src={videoIcon} alt='video-icon'/>Video</button>
                        </div>
                        <div className='section-4 h-[14%] p-4'>
                            <button className='w-[100%] h-11 bg-blue-200 rounded-md
                                    text-blue-600 font-medium hover:bg-blue-300 
                                    transition-colors duration-200 ease-in-out'>Share</button>
                        </div>
                    </div>
               </div> 
            ) }
        </>
    )
}
