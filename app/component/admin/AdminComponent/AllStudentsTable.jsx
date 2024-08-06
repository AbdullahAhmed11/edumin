import Image from 'next/image';
import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const AllStudentsTable = () => {
    return (
        <div className="mt-5 overflow-x-auto">
            <table className="min-w-full  ">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Profile
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Roll No.
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Education
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Mobile
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Email
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Admission Date
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Evaluation
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-3 border-b border-gray-200  ">
                            <Image
                                width={40}
                                height={40}
                                src="/images/pic7.jpg"
                                className='rounded-full'
                            />
                        </td>
                        <td className=" p-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            Tiger Nixon
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            M.COM., P.H.D.
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            123 456 7890
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            info@example.com
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            2011/04/25
                        </td>
                        <td className="p-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>
                        <td className="p-3 border-b border-gray-200">
                            <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                <MdEdit className='text-white' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-3 border-b border-gray-200  ">
                            <Image
                                width={40}
                                height={40}
                                src="/images/pic7.jpg"
                                className='rounded-full'
                            />
                        </td>
                        <td className=" p-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            Tiger Nixon
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            M.COM., P.H.D.
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            123 456 7890
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            info@example.com
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            2011/04/25
                        </td>
                        <td className="p-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>
                        <td className="p-3 border-b border-gray-200">
                            <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                <MdEdit className='text-white' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-3 border-b border-gray-200  ">
                            <Image
                                width={40}
                                height={40}
                                src="/images/pic7.jpg"
                                className='rounded-full'
                            />
                        </td>
                        <td className=" p-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            Tiger Nixon
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            M.COM., P.H.D.
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            123 456 7890
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            info@example.com
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            2011/04/25
                        </td>
                        <td className="p-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>
                        <td className="p-3 border-b border-gray-200">
                            <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                <MdEdit className='text-white' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-3 border-b border-gray-200  ">
                            <Image
                                width={40}
                                height={40}
                                src="/images/pic7.jpg"
                                className='rounded-full'
                            />
                        </td>
                        <td className=" p-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            Tiger Nixon
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            M.COM., P.H.D.
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            123 456 7890
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            info@example.com
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            2011/04/25
                        </td>
                        <td className="p-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>
                        <td className="p-3 border-b border-gray-200">
                            <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                <MdEdit className='text-white' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="p-3 border-b border-gray-200  ">
                            <Image
                                width={40}
                                height={40}
                                src="/images/pic7.jpg"
                                className='rounded-full'
                            />
                        </td>
                        <td className=" p-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            Tiger Nixon
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            M.COM., P.H.D.
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            123 456 7890
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            info@example.com
                        </td>
                        <td className="p-3 border-b border-gray-200 text-[13px]">
                            2011/04/25
                        </td>
                        <td className="p-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>
                        <td className="p-3 border-b border-gray-200">
                            <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                <MdEdit className='text-white' />
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default AllStudentsTable