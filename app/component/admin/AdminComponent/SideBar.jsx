'use client'
import React, { useState } from 'react'
import { RxPerson } from "react-icons/rx";
import { MdOutlineGroups } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { IoRemoveOutline } from "react-icons/io5";
import { FaToolbox } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";

import Link from 'next/link';

const SideBar = ({ openSide }) => {
    const [isOpen, setIsOpen] = useState(false);

    const sideBarData = [
        {
            icon: <RxPerson />,
            title: "Professors",
            allLinks: [
                {
                    href: "/allinstructors",
                    label: "All Professor"
                },
                {
                    href: "addprofessor",
                    label: "Add Professor"
                },
            ]

        },
        {
            icon: <MdOutlineGroups />,
            title: "Students",
            allLinks: [
                {
                    href: "/allstudents",
                    label: "All Students"
                },
                {
                    href: "/addstudent",
                    label: "Add Students"
                },
            ]

        },
        {
            icon: <GiGraduateCap />,
            title: "Courses",
            allLinks: [
                {
                    href: "allcourses",
                    label: "All Courses"
                },
                {
                    href: "addcourse",
                    label: "Add Courses"
                },
                {
                    href: "editcourse",
                    label: "Edit Course"
                },
                {
                    href: "aboutcourse",
                    label: "About Course"
                },
            ]
        },
        {
            icon: <FaToolbox />,
            title: "Holiday",
            allLinks: [
                {
                    href: "allholiday",
                    label: "All Holiday"
                },
                {
                    href: "addholiday",
                    label: "Add Holiday"
                },
                {
                    href: "editholiday",
                    label: "Edit Holiday"
                },
                {
                    href: "holidaycalendar",
                    label: "Holiday Calendar"
                },
            ]
        },
        {
            icon: <FaDollarSign />,
            title: "Fess",
            allLinks: [
                {
                    href: "feescollection",
                    label: "Fees Collection"
                },
                {
                    href: "addfees",
                    label: "Add Fess"
                },
                {
                    href: "feesreceipt",
                    label: "Fees Receipt"
                },
            ]
        },

    ]

    return (
        <div>
            <div className={` ${openSide === true ? `` : `hidden`} h-screen   w-[250px]  bg-white shadow-md flex flex-col `}>
                <p className='pl-8 mt-3 text-[12px] font-medium text-[#999999]'>MAIN MENU</p>
                {
                    sideBarData.map((data) => (
                        <Accordion elevation={0} key={data.title}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                                className=''
                            >
                                <div className='flex items-center gap-3'>
                                    {data.icon}
                                    <p className='text-[0.8375rem] font-medium text-[#7f7184]'> {data.title}</p>
                                </div>
                            </AccordionSummary>
                            {
                                data.allLinks.map((link) => (
                                    <AccordionDetails key={link.label}>
                                        <div className='flex flex-col pl-4 gap-3'>
                                            <div className='flex items-center gap-3'>
                                                <IoRemoveOutline />
                                                <Link href={link.href}>
                                                    {link.label}
                                                </Link>
                                            </div>
                                        </div>
                                    </AccordionDetails>
                                ))
                            }
                        </Accordion>
                    ))
                }
            </div>
        </div>

        // <div className="flex">
        //     {/* Sidebar */}
        //     <div className={`z-10 fixed bg-white inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out bg-white w-64 p-4`}>
        //         <p className='pl-8 mt-3 text-[12px] font-medium text-[#999999]'>MAIN MENU</p>
        //         {
        //             sideBarData.map((data) => (
        //                 <Accordion elevation={0} key={data.title}>
        //                     <AccordionSummary
        //                         expandIcon={<ExpandMoreIcon />}
        //                         aria-controls="panel1-content"
        //                         id="panel1-header"
        //                         className=''
        //                     >
        //                         <div className='flex items-center gap-3'>
        //                             {data.icon}
        //                             <p className='text-[0.8375rem] font-medium text-[#7f7184]'> {data.title}</p>
        //                         </div>
        //                     </AccordionSummary>
        //                     {
        //                         data.allLinks.map((link) => (
        //                             <AccordionDetails key={link.label}>
        //                                 <div className='flex flex-col pl-4 gap-3'>
        //                                     <div className='flex items-center gap-3'>
        //                                         <IoRemoveOutline />
        //                                         <Link href={link.href}>
        //                                             {link.label}
        //                                         </Link>
        //                                     </div>
        //                                 </div>
        //                             </AccordionDetails>
        //                         ))
        //                     }
        //                 </Accordion>
        //             ))
        //         }
        //     </div>

        //     {/* Main content */}
        //     {/* <div className="flex-1 p-4 lg:ml-64">
        //         <button className="lg:hidden mb-4 p-2 bg-blue-500 text-white" onClick={() => setIsOpen(!isOpen)}>
        //             Toggle Sidebar
        //         </button>
        //         <div>Main content here</div>
        //     </div> */}
        // </div>
    )
}

export default SideBar