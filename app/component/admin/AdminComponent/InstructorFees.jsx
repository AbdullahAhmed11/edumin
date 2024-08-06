'use client'
import React from 'react'
import { Divider } from '@mui/material'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const InstructorFees = () => {
    return (
        <div className="mt-5 overflow-x-auto">
            <table className="min-w-full  ">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-bold   tracking-wider">

                            Roll No
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-bold   tracking-wider">
                            Student Name
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-bold   tracking-wider">
                            Invoice number
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-bold   tracking-wider">
                            Fees Type
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-bold   tracking-wider">
                            Payment Type
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-bold   tracking-wider">
                            Status
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-bold   tracking-wider">
                            Date
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-bold   tracking-wider">
                            Amout
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='hover:bg-primaryBg'>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap text border-b border-gray-200">
                            01
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Tiger Nixon
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            #54605
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Library
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Cash
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Paid
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            2011/04/25
                        </td>
                        <td className="px-6 text-textColor flex items-center gap-2 py-4 whitespace-no-wrap border-b border-gray-200">
                            120$
                        </td>
                    </tr>
                    <tr className='hover:bg-primaryBg'>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap text border-b border-gray-200">
                            01
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Tiger Nixon
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            #54605
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Library
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Cash
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Paid
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            2011/04/25
                        </td>
                        <td className="px-6 text-textColor flex items-center gap-2 py-4 whitespace-no-wrap border-b border-gray-200">
                            120$
                        </td>
                    </tr>
                    <tr className='hover:bg-primaryBg'>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap text border-b border-gray-200">
                            01
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Tiger Nixon
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            #54605
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Library
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Cash
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Paid
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            2011/04/25
                        </td>
                        <td className="px-6 text-textColor flex items-center gap-2 py-4 whitespace-no-wrap border-b border-gray-200">
                            120$
                        </td>
                    </tr>
                    <tr className='hover:bg-primaryBg'>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap text border-b border-gray-200">
                            01
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Tiger Nixon
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            #54605
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Library
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Cash
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            Paid
                        </td>
                        <td className="px-6 text-textColor py-4 whitespace-no-wrap border-b border-gray-200">
                            2011/04/25
                        </td>
                        <td className="px-6 text-textColor flex items-center gap-2 py-4 whitespace-no-wrap border-b border-gray-200">
                            120$
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default InstructorFees