'use client'
import React from 'react'
import PaymentCard from '../StudentComponent/PaymentCard';
import DataCard from '../StudentComponent/DataCard';
import { Scheduler } from "@aldabil/react-scheduler";
import TablesHome from '../StudentComponent/TablesHome';

const Home = () => {
    return (
        <div className='w-full  bg-primaryBg flex flex-col md:flex-row gap-3'>
            <div className='md:w-1/3 w-full flex flex-col gap-3 p-4'>
                <PaymentCard />
                <DataCard />
            </div>
            <div className='md:w-2/3 w-full flex flex-col gap-3 p-4'>
                <div className='bg-white w-full  p-4 flex flex-col'>
                    <TablesHome />
                </div>
            </div>
        </div>
    )
}

export default Home