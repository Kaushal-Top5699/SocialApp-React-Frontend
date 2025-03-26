import React from 'react'
import searchIcon from '../../../assets/search-2.svg'
import { FriendCell } from './FriendCell'

export const RightSections = () => {
    return (
        <div className='w-[20%] h-[100%] p-4'>
            <div className='message-div bg-white rounded-lg p-3 w-[100%] h-96'>
                <p className='text-base font-medium mb-2'>Messages</p>
                <div className='w-[100%] h-10 bg-gray-100 rounded-md flex justify-center items-center'>
                    <img className='w-4 h-4 ml-3' src={searchIcon} alt='search-icon'/>
                    <input className='bg-gray-100 h-[100%] w-[100%] rounded-md text-xs' type='text' placeholder=' Search' />
                </div>
                <div className='flex justify-between items-center mt-2 border-b-[0.5px] border-gray-400'>
                    <div className='flex justify-center items-center text-sm space-x-8 cursor-pointer'>
                        <p className='hover:underline'>Primary</p>
                        <p className='hover:underline'>General</p>
                    </div>
                    <div className='text-sm'>
                        <p className='text-blue-600 font-medium cursor-pointer hover:underline'>Requests(4)</p>
                    </div>
                </div>
                <div className='message-list h-[70%] mt-2 overflow-y-auto'>
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                </div>
            </div>
            <div className='people-div w-[100%] h-96 bg-white rounded-lg p-3 mt-3'>
                <p className='text-base font-medium'>People you may know.</p>
                <div className='h-[95%] overflow-y-auto'>
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                    <FriendCell />
                </div>
            </div>
        </div>
    )
}
