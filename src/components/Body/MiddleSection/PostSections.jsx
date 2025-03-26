import React from 'react'
import { PostCard } from './PostCard'

export const PostSections = () => {
    return (
        <div className='post-section h-[90%] overflow-y-auto'>
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    )
}
