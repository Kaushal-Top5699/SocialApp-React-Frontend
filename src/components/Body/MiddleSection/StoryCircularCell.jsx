import React from 'react'
import kaushalIcon from '../../../assets/kaushal-2.png'
import addIcon from '../../../assets/add-icon-1.png'

export const StoryCircularCell = () => {
    return (
        <div className='story-circular-cell flex flex-col justify-center items-center min-w-[80px] cursor-pointer'>
            <div className='relative'>
                <img className='w-16 h-16 rounded-full border-[2px] border-pink-600' src={kaushalIcon} alt='user-image'/>
            </div>
            <p className='text-xs text-gray-600 mt-1'>Name</p>
        </div>
    )
}
