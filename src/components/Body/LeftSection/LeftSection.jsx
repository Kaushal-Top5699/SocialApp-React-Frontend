import React from 'react'
import { ProfileCard } from './ProfileCard'
import { MenuCard } from './MenuCard'

export const LeftSection = () => {
    return (
        <div className='w-[20%] h-[100%] p-4'>
            <ProfileCard />
            <MenuCard />
        </div>
    )
}
