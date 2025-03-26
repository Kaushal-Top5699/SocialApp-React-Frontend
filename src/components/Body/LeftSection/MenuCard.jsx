import React from 'react'

import homeIcon from '../../../assets/home-2.svg'
import friendsIcon from '../../../assets/friends-1.svg'
import eventsIcon from '../../../assets/calender-1.svg'
import videoIcon from '../../../assets/video-2.svg'
import photosIcon from '../../../assets/photos-1.svg'
import marketPlaceIcon from '../../../assets/cart-1.svg'
import filesIcon from '../../../assets/files-1.svg'

import homeIconWhite from '../../../assets/home-white-2.svg'
import friendsIconWhite from '../../../assets/friends-white-1.svg'
import eventsIconWhite from '../../../assets/calender-white-1.svg'
import videoIconWhite from '../../../assets/video-white-2.svg'
import photosIconWhite from '../../../assets/photos-white-1.svg'
import marketPlaceIconWhite from '../../../assets/cart-white-1.svg'
import filesIconWhite from '../../../assets/files-white-1.svg'

import pageOne from '../../../assets/page-1.gif'
import pageTwo from '../../../assets/page-2.gif'
import pageThree from '../../../assets/page-3.gif'
import pageFour from '../../../assets/page-4.gif'

export const MenuCard = () => {

    const menuItems = ["Feed", "Friends", "Event", "Watch Videos", "Photos", "Marketplace", "Files"]
    const menuIcons = [homeIcon, friendsIcon, eventsIcon, videoIcon, photosIcon, marketPlaceIcon, filesIcon]
    const menuIconsWhite = [homeIconWhite, friendsIconWhite, eventsIconWhite, videoIconWhite, photosIconWhite, marketPlaceIconWhite, filesIconWhite]
    const menuIconsSize = ["55", "55", "55", "55", "55", "55", "55"]

    return (
        <div className='menu-card'>
            <div className='menu bg-white mt-5 rounded-lg p-2 flex flex-col justify-center items-center space-y-1'>
                { menuItems.map((item, index) => (
                    <div className='menu-cell flex items-center w-[95%] h-10 space-x-3 rounded-md group hover:bg-blue-500 cursor-pointer' 
                        key={index}>
                        <img className={`w-${menuIconsSize[index][0]} h-${menuIconsSize[index][1]} ml-3 group-hover:hidden`} 
                             src={menuIcons[index]} alt='menu-icon'/>
                        <img className={`w-${menuIconsSize[index][0]} h-${menuIconsSize[index][1]} ml-3 hidden group-hover:block`} 
                             src={menuIconsWhite[index]} alt='menu-icon'/>
                        <p className='text-gray-600 text-sm group-hover:text-white group-hover:font-semibold'>{item}</p>
                    </div>
                )) } 
                <div className='pages border-t-[0.5px] border-gray-400 w-[100%] p-2'>
                    <div className='mt-2 space-y-2 font-medium'>
                        <p className='text-sm text-gray-500 mb-2'>PAGES YOU LIKE</p>
                        <div className='flex space-x-2 text-sm items-center cursor-pointer hover:underline'>
                            <img className='w-8 h-8' src={pageOne} alt='page-1'/>
                            <p>Adobe Community</p>
                        </div>
                        <div className='flex space-x-2 text-sm items-center cursor-pointer hover:underline'>
                            <img className='w-8 h-8' src={pageTwo} alt='page-1'/>
                            <p>Apple News</p>
                        </div>
                        <div className='flex space-x-2 text-sm items-center cursor-pointer hover:underline'>
                            <img className='w-8 h-8' src={pageThree} alt='page-1'/>
                            <p>Photoshop</p>
                        </div>
                        <div className='flex space-x-2 text-sm items-center cursor-pointer hover:underline'>
                            <img className='w-8 h-8' src={pageFour} alt='page-1'/>
                            <p>Data & Data 2025</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about bg-white rounded-md mt-5 p-2'>
                <p className='text-xs text-gray-600 flex flex-col justify-center space-y-2'>
                    <span>Designed and developed by <span className='text-blue-600 hover:underline cursor-pointer'>Kaushal Topinkatti</span>. All <span className='text-blue-600 hover:underline cursor-pointer'>rights</span> reserved.</span>
                    <div className='flex space-x-4 cursor-pointer'>
                        <span className='hover:underline text-blue-600'>Contact</span>
                        <span className='hover:underline text-blue-600'>About</span>
                        <span className='hover:underline text-blue-600'>View Projects</span>
                        <span className='hover:underline text-blue-600'>More</span>
                    </div>
                    <span className='text-xs'>©2025 <span className='text-blue-600 hover:underline cursor-pointer'>Kaushal Topinkatti</span>.</span>
                </p>
            </div>
        </div>
    )
}
