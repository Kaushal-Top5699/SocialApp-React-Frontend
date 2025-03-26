import React from 'react'
import kaushalImage from '../../../assets/kaushal-2.png'

export const ProfileCard = () => {
    return (
        <div className='profile-card bg-white rounded-lg h-44 flex justify-center items-center'>
            <div className='bg-gray-100 flex flex-col justify-center items-center h-[85%] w-[90%] rounded-lg'>
                <div className='profile flex justify-center items-center h-[50%] border-b-[0.5px] border-gray-400'>
                    <img className='w-10 h-10 rounded-full' src={kaushalImage} alt='profile-image' />
                    <div className='text-sm pl-4 font-medium'>
                        <p>Kaushal Topinkatti</p>
                        <p className='font-normal text-xs'>kaushaltopusa@gamil.com</p>
                    </div>
                </div>
                <div className='activity flex justify-center items-center space-x-10 h-[50%]'>
                    <div className='followers flex flex-col justify-center items-center'>
                        <p className='font-semibold text-sm'>0.0</p>
                        <p className='font-normal text-xs'>Followers</p>
                    </div>
                    <div className='following flex flex-col justify-center items-center'>
                        <p className='font-semibold text-sm'>0.0</p>
                        <p className='font-normal text-xs'>Following</p>
                    </div>
                    <div className='post flex flex-col justify-center items-center'>
                        <p className='font-semibold text-sm'>0.0</p>
                        <p className='font-normal text-xs'>Posts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
