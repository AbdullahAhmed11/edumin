'use client'
import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import SideBar from './SideBar'
const AdminLayout = ({ children }) => {
    const [openSide, setOpenSide] = useState(true)
    const handleOpenSide = () => {
        setOpenSide(!openSide)
        console.log(openSide)
    }
    return (
        <>
            <div className="">
                <AdminNavbar handleOpenSide={handleOpenSide} />
                <div className="flex">
                    <SideBar openSide={openSide} />
                    <main className="flex-1 p-4 bg-primaryBg">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}

export default AdminLayout