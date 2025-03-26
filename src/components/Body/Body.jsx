import React from 'react'
import { LeftSection } from './LeftSection/LeftSection'
import { MiddleSection } from './MiddleSection/MiddleSection'
import { RightSections } from './RightSection/RightSections'

export const Body = () => {
    return (
        <div className='body-contaier flex'>
            <LeftSection />
            <MiddleSection />
            <RightSections />
        </div>
    )
}
