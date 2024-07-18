import React from 'react'
import Navbar from '@/app/component/student/Navbar/Navbar'
import Home from '@/app/component/student/Home/Home'
const page = () => {
    return (
        <div>
            <Navbar />
            <div className="w-full h-[100vh]">
                <Home />
            </div>
        </div>)
}

export default page