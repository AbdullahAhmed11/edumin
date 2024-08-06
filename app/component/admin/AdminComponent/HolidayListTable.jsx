import React from 'react'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const HolidayListTable = () => {
    return (
        <div className="mt-5 overflow-x-auto">
            <table className="min-w-full  ">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">

                            S.No.
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Title
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Type
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Start date
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            End date
                        </th>
                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Details
                        </th>


                        <th className="px-6 py-3 border-b border-gray-200  text-left text-[0.8rem] leading-4 font-medium   tracking-wider">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className=" px-6 py-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Festival
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            National Holiday
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            31 July 1998
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            12 August 2021
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Lorem Ipsum is simply dummy
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className=" px-6 py-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Festival
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            National Holiday
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            31 July 1998
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            12 August 2021
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Lorem Ipsum is simply dummy
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className=" px-6 py-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Festival
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            National Holiday
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            31 July 1998
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            12 August 2021
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Lorem Ipsum is simply dummy
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className=" px-6 py-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Festival
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            National Holiday
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            31 July 1998
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            12 August 2021
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Lorem Ipsum is simply dummy
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className=" px-6 py-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Festival
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            National Holiday
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            31 July 1998
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            12 August 2021
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Lorem Ipsum is simply dummy
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className=" px-6 py-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Festival
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            National Holiday
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            31 July 1998
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            12 August 2021
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Lorem Ipsum is simply dummy
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className=" px-6 py-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Festival
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            National Holiday
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            31 July 1998
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            12 August 2021
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Lorem Ipsum is simply dummy
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td className=" px-6 py-3 border-b border-gray-200  text-[13px]">
                            01
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Festival
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            National Holiday
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            31 July 1998
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            12 August 2021
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200 text-[13px]">
                            Lorem Ipsum is simply dummy
                        </td>
                        <td className="px-6 py-3 border-b border-gray-200">
                            <div className='flex gap-2'>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                                <div className='w-[25px] h-[25px]  rounded-md bg-primary flex items-center justify-center'>
                                    <MdEdit className='text-white' />
                                </div>
                            </div>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default HolidayListTable