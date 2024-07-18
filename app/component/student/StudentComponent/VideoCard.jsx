import React from 'react'
import Video from 'next-video';
import { Divider } from '@mui/material';

const VideoCard = () => {
    return (
        < div className='flex flex-col gap-3'>
            <div className='border border-2 rounded-md flex flex-col shadow-md'>
                <Video src="https://www.youtube.com/watch?v=gNVBh-h7cfc" />
                <div className='p-4 '>
                    <h2 className='text-[0.8rem] font-bold'>Card Title</h2>
                </div>
                <Divider />
                <div className='mt-2 flex flex-col gap-3 p-4'>
                    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p>Last updated 3 mins ago</p>
                </div>
            </div>
            <div className='border border-2 rounded-md flex flex-col shadow-md'>
                <Video src="https://www.youtube.com/watch?v=gNVBh-h7cfc" />
                <div className='p-4 '>
                    <h2 className='text-[0.8rem] font-bold'>Card Title</h2>
                </div>
                <Divider />
                <div className='mt-2 flex flex-col gap-3 p-4'>
                    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p>Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard 