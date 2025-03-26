import React from 'react'
import kaushalIcon from '../../../assets/kaushal-2.png'
import addIcon from '../../../assets/add-icon-1.png'

export const StoryCircularCellMe = () => {
    return (
        <div className='story-circular-cell flex flex-col justify-center items-center min-w-[80px] cursor-pointer'>
            <div className='relative'>
                <img className='w-16 h-16 rounded-full border-[2px] border-blue-600' src={kaushalIcon} alt='user-image'/>
                <img
                    className="w-6 h-6 absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4"
                    src={addIcon}
                    alt="add-icon"
                />
            </div>
            <p className='text-xs text-gray-600 mt-1'>Your Story</p>
        </div>
    )
}
