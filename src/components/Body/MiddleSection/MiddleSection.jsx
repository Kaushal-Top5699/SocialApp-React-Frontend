import React from 'react'
import { StorySection } from './StorySection'
import { PostSections } from './PostSections'

export const MiddleSection = () => {
    return (
        <div className='w-[60%] h-[85vh] p-4'>
            <StorySection />
            <p className='mt-4 text-2xl ml-1 font-semibold h-10 backdrop-blur-md px-4'>Your feed</p>
            <PostSections />
        </div>
    )
}
