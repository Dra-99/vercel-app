import React from 'react'
import Image, { StaticImageData } from 'next/image'

// 定义组件属性 ts
interface ContentProps {
    src: StaticImageData;
    description: string;
}

export default function Content(props: ContentProps) {

    const { src, description } = props;

    return (
        <div className='h-screen relative'>
            <Image src={src} alt='' style={{ objectFit: 'cover' }} className='w-full h-full absolute -z-10' />
            <p className='fixed text-white text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{description}</p>
        </div>
    )
}
