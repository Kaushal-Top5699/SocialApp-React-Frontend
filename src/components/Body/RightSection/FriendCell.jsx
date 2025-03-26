import React from 'react'
import kaushalIcon from '../../../assets/kaushal-2.png'

export const FriendCell = () => {
    return (
        <div className='friend-cell h-12 flex items-center space-x-2 p-2 rounded-md mt-2 cursor-pointer hover:bg-gray-200'>
            <img className='w-8 h-8 rounded-full' src={kaushalIcon} alt='user-image'/>
            <p className='text-sm font-semibold text-gray-800'>First and last name</p>
        </div>
    )
}
