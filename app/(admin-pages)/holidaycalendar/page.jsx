'use client'
import AdminLayout from '@/app/component/admin/AdminComponent/AdminLayout'
import LineBar from '@/app/component/admin/AdminComponent/LineBar'
import React from 'react'
import { Scheduler } from '@aldabil/react-scheduler'

const page = () => {
    return (
        <AdminLayout>
            <div className='flex flex-col gap-5'>
                <LineBar
                    title="Holiday Calendar"
                    mainLink="Holiday"
                    link="Holiday Calendar"
                />
                <div className='border border-2 w-full bg-white shadow-md rounded-md p-4'>
                    <Scheduler
                        view="month"
                        events={[
                            {
                                event_id: 1,
                                title: "Event 1",
                                start: new Date("2021/5/2 09:30"),
                                end: new Date("2021/5/2 10:30"),
                            },
                            {
                                event_id: 2,
                                title: "Event 2",
                                start: new Date("2021/5/4 10:00"),
                                end: new Date("2021/5/4 11:00"),
                            },
                        ]}
                    />

                </div>
            </div>
        </AdminLayout>
    )
}

export default page