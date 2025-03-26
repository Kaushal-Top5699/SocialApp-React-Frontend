import React from 'react'
import reactLogo from '../../assets/react.svg'
import nodejsLogo from '../../assets/nodejs.png'
import javascriptLogo from '../../assets/javascript.png'
import javaLogo from '../../assets/001-java.png'
import springbootLogo from '../../assets/spring.png'
import searchIcon from '../../assets/search-2.svg'
import dropDownArrow from '../../assets/drop-down.svg'
import kaushalImage from '../../assets/kaushal-2.png'

export const Navbar = () => {
    return (
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
                    <button className='bg-blue-500 w-[50%] h-12 ml-4
                             text-white rounded-md text-sm hover:bg-blue-600'
                            >Create Post</button>
                    <button className='bg-blue-500 w-[50%] h-12 
                            text-white rounded-md text-sm hover:bg-blue-600'
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
    )
}
