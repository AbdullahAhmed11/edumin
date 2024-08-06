'use client'
import InstructorLayout from '@/app/component/instructor/InstructorLayout'
import InstructorLinebar from '@/app/component/instructor/InstructorLinebar'
import React from 'react'
import { Scheduler } from '@aldabil/react-scheduler'
import AddSessionForm from '@/app/component/instructor/AddSessionForm'
const page = () => {
    return (
        <div className='dark:bg-[#212130]'>

            <InstructorLayout>
                <div className='flex flex-col gap-5 '>
                    <InstructorLinebar
                        title="Events"
                        mainLink="Events"
                        link="Events Management"
                    />
                    <div className='border border-2 w-full bg-white dark:bg-darkBg shadow-md rounded-md p-4'>
                        <Scheduler
                            view="month"
                            className="dark:bg-darkBg "
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
                    <div>
                        <AddSessionForm />
                    </div>
                </div>
            </InstructorLayout>
        </div>
    )
}

export default page