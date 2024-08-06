'use client'
import React, { useEffect, useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            setTheme('light');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? <MdDarkMode className='w-[24px] h-[24px] ' /> : <CiLight className='w-[24px] h-[24px] dark:text-white' />}
        </button>
    );
}
