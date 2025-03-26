import React from 'react'
import kaushalIcon from '../../../assets/kaushal-2.png'
import editPostIcon from '../../../assets/edit-post-1.png'

import heartOne from '../../../assets/heart-1.png'
import heartTwo from '../../../assets/heart-2.gif'
import heartThree from '../../../assets/heart-3.png'

import commentsIcon from '../../../assets/comments-1.png'

export const PostCard = () => {
    return (
        <div className='post-card w-[100%] h-96 bg-white rounded-lg p-4 mb-4'>
            <div className='section-1 h-[10%] flex justify-between items-center'>
                <div className='flex space-x-2'>
                    <div className='flex justify-center items-center'>
                        <img className='w-8 h-8 rounded-full' src={kaushalIcon} alt='user-image'/>
                    </div>
                    <div>
                        <div className='flex flex-col justify-center'>
                            <p className='text-sm font-semibold'>Poster name</p>
                            <p className='text-xs text-gray-500'>Time</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img className='w-4 h-4' src={editPostIcon} alt='edit-icon'/>
                </div>
            </div>
            <div className='section-2 h-[80%] w-full flex justify-center items-center cursor-pointer rounded-lg overflow-hidden'>
                <img className='w-full h-full object-contain' src='https://www.apple.com/lae/iphone/home/images/overview/welcome/us/welcome_startframe__bqlrw3voffaq_xlarge.jpg' alt='post-image'/>
            </div>
            <div className='section-3 h-[10%] border-t-[1px] mt-2 flex items-center space-x-8 text-sm text-gray-600'>
                <div className='likes flex items-center space-x-2 cursor-pointer'>
                    <img className='w-5 h-5' src={heartOne} alt='like-icon'/>
                    <p className='hover:underline hover:text-gray-900'>30 Likes</p>
                </div>
                <div className='comments flex items-center space-x-2 cursor-pointer'>
                    <img className='w-5 h-5' src={commentsIcon} alt='comment-icon'/>
                    <p className='hover:underline hover:text-gray-900'>30 Comments</p>
                </div>
            </div>
        </div>
    )
}
