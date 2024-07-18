import React from 'react'

const FeedBack = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h2 className='text-primary text-[2rem] font-bold '>Course Evaluation Survey </h2>
            <p className='text-primary text-[1rem] fonr-medium'>Personal Information</p>
            <div className='flex flex-col gap-3'>
                <label className='text-labelColor text-[1rem] font-bold'>COURSE </label>
                <input className="w-full h-[30px] p-3 border rounded-md text-[#000]" />
            </div>
            <div className='flex flex-col gap-3'>
                <label className='text-labelColor text-[1rem] font-bold'>INSTRUCTOR </label>
                <input className="w-full h-[30px] p-3 border rounded-md text-[#000]" />
            </div>
            <div className='flex flex-col gap-3'>
                <label className='text-labelColor text-[1rem] font-bold'>TERM AND YEAR </label>
                <input className="w-full h-[30px] p-3 border rounded-md text-[#000]" />
            </div>
            <div className="p-4">
                <h4 className="text-lg font-semibold mb-4">Untitled</h4>
                {/* <table className="min-w-full bg-white border">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2 first-col"></th>
                            <th className="border px-4 py-2 text-[#000]">Strongly Disagree</th>
                            <th className="border px-4 py-2 text-[#000]">Disagree</th>
                            <th className="border px-4 py-2 text-[#000]">Neutral</th>
                            <th className="border px-4 py-2 text-[#000]">Agree</th>
                            <th className="border px-4 py-2 text-[#000]">Strongly Agree</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2 first-col text-[#000]">1. The instructor stimulated my interest in the subject.</td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 first-col text-[#000]">1. The instructor stimulated my interest in the subject.</td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2 first-col text-[#000]">1. The instructor stimulated my interest in the subject.</td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                            <td className="border px-4 py-2"><input type="radio" value="none" name="interest" /></td>
                        </tr>
                    </tbody>
                </table> */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-collapse">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 first-col"></th>
                                <th className="border px-4 py-2 text-[#000]">Strongly Disagree</th>
                                <th className="border px-4 py-2 text-[#000]">Disagree</th>
                                <th className="border px-4 py-2 text-[#000]">Neutral</th>
                                <th className="border px-4 py-2 text-[#000]">Agree</th>
                                <th className="border px-4 py-2 text-[#000]">Strongly Agree</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="flex flex-col sm:table-row">
                                <td className="border px-4 py-2 first-col text-[#000]">1. The instructor stimulated my interest in the subject.</td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest1" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest1" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest1" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest1" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest1" /></td>
                            </tr>
                            <tr className="flex flex-col sm:table-row">
                                <td className="border px-4 py-2 first-col text-[#000]">2. The instructor stimulated my interest in the subject.</td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest2" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest2" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest2" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest2" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest2" /></td>
                            </tr>
                            <tr className="flex flex-col sm:table-row">
                                <td className="border px-4 py-2 first-col text-[#000]">3. The instructor stimulated my interest in the subject.</td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest3" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest3" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest3" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest3" /></td>
                                <td className="border px-4 py-2"><input type="radio" value="none" name="interest3" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex flex-col mt-2 gap-2'>
                    <p>9. The instructor was accessible outside of class</p>
                    <div className='flex gap-3'>
                        <label className=''>
                            <input type="radio" value="none" name="accessible" /> yes
                        </label>
                        <label><input type="radio" value="none"
                            name="accessible" /> no</label>
                    </div>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label className='text-labelColor'>Comment</label>
                    <textarea className='w-full h-[150px]  p-3 border rounded-md' />
                </div>
                <div className='flex items-center mt-5 justify-center'>
                    <button className='w-[150px] rounded-md p-[10px] bg-thirdBg text-white'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default FeedBack