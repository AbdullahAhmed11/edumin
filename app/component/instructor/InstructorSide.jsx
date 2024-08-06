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
import { GrSchedule } from "react-icons/gr";
import Link from 'next/link';
import { BiTask } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const InstructorSide = ({ openSide }) => {
    const sideBarData = [
        {
            icon: <GrSchedule />,
            title: "schedule",
            href: "schedule",
            allLinks: [

            ]
        },
        {
            icon: <FaDollarSign />,
            title: "All Fees",
            href: "allfees",
            allLinks: [

            ]
        },
        {
            icon: <MdOutlineGroups />,
            title: "All Students",
            href: "students",
            allLinks: []
        },
        {
            icon: <BiTask />,
            title: "All Tasks",
            href: "tasks",
            allLinks: []
        },
        {
            icon: <GiGraduateCap />,
            title: "All Courses",
            href: "courses",
            allLinks: []
        },
        {
            icon: <FaToolbox />,
            title: "All Sessions-off",
            href: "allsessions",
            allLinks: []
        },
        {
            icon: <FaToolbox />,
            title: "Add Sessions-off",
            href: "addsession",
            allLinks: []
        },
    ]
    return (

        <aside className={`bg-white dark:bg-[#212130] w-[14.5rem] shadow-md h-screen ${openSide === true ? "" : "hidden"}`}>
            <div className=''>
                <div className={` h-screen    shadow-md flex flex-col `}>
                    <p className=' text-[#999999]  pl-8 mt-3 mb-5 mt-[70px] text-[0.75rem] font-medium  '>MAIN MENU</p>
                    {
                        sideBarData.map((data) => (
                            <Link href={data.href} key={data.href}>
                                <div className='flex p-3 pl-6 items-center gap-5'>
                                    <span className='text-[#737b8b]' >{data.icon}</span>
                                    <p className='text-[0.8375rem] font-medium text-[#737b8b]'> {data.title}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </aside>
    )
}

export default InstructorSide