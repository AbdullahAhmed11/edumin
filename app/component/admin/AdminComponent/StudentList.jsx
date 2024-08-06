'use client'
import React from 'react'
import { Divider } from '@mui/material'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const StudentList = () => {
    return (
        <div className='p-2'>
            <div className='w-full border bg-white  flex flex-col   shadow-md rounded-md'>
                <h2 className=' text-[1rem] font-medium p-6'>New Student List </h2>
                <Divider />
                <div className="mt-5 overflow-x-auto">
                    <table className="min-w-full  ">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-[1rem] leading-4 font-medium   tracking-wider">
                                    Code
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-[1rem] leading-4 font-medium   tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-[1rem] leading-4 font-medium   tracking-wider">
                                    Group Name
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-[1rem] leading-4 font-medium   tracking-wider">
                                    Date Of Admit
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-[1rem] leading-4 font-medium   tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-[1rem] leading-4 font-medium   tracking-wider">
                                    Subject
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-[1rem] leading-4 font-medium   tracking-wider">
                                    Student Feedback
                                </th>
                                <th className="px-6 py-3 border-b border-gray-200  text-left text-[1rem] leading-4 font-medium   tracking-wider">
                                    Edit
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Jack Ronan
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Airi Satou
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01 August 2021
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs">
                                        Checkin
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    Commerce
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    120$
                                </td>
                                <td className="px-6 flex items-center gap-2 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                        <MdEdit className='text-white' />
                                    </div>
                                    <div className='w-[25px] h-[25px] rounded-md bg-red-600 flex items-center justify-center'>
                                        <MdDelete className='text-white' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Jack Ronan
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Airi Satou
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01 August 2021
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs">
                                        Checkin
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    Commerce
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    120$
                                </td>
                                <td className="px-6 flex items-center gap-2 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                        <MdEdit className='text-white' />
                                    </div>
                                    <div className='w-[25px] h-[25px] rounded-md bg-red-600 flex items-center justify-center'>
                                        <MdDelete className='text-white' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Jack Ronan
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Airi Satou
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01 August 2021
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs">
                                        Checkin
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    Commerce
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    120$
                                </td>
                                <td className="px-6 flex items-center gap-2 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                        <MdEdit className='text-white' />
                                    </div>
                                    <div className='w-[25px] h-[25px] rounded-md bg-red-600 flex items-center justify-center'>
                                        <MdDelete className='text-white' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Jack Ronan
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Airi Satou
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01 August 2021
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs">
                                        Checkin
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    Commerce
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    120$
                                </td>
                                <td className="px-6 flex items-center gap-2 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                        <MdEdit className='text-white' />
                                    </div>
                                    <div className='w-[25px] h-[25px] rounded-md bg-red-600 flex items-center justify-center'>
                                        <MdDelete className='text-white' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Jack Ronan
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Airi Satou
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01 August 2021
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs">
                                        Checkin
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    Commerce
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    120$
                                </td>
                                <td className="px-6 flex items-center gap-2 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                        <MdEdit className='text-white' />
                                    </div>
                                    <div className='w-[25px] h-[25px] rounded-md bg-red-600 flex items-center justify-center'>
                                        <MdDelete className='text-white' />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Jack Ronan
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    Airi Satou
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-textColor">
                                    01 August 2021
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <span className="bg-blue-500 text-white py-1 px-3 rounded-full text-xs">
                                        Checkin
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    Commerce
                                </td>
                                <td className="px-6 py-4 text-textColor whitespace-no-wrap border-b border-gray-200">
                                    120$
                                </td>
                                <td className="px-6 flex items-center gap-2 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                        <MdEdit className='text-white' />
                                    </div>
                                    <div className='w-[25px] h-[25px] rounded-md bg-red-600 flex items-center justify-center'>
                                        <MdDelete className='text-white' />
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div >
        </div >
    )
}

export default StudentList