import { useState ,useEffect } from 'react';
// Import You Profile Img
import logo from '../img/profile.jpg'

// Icons For Light and Dark Mode 
import { FaMoon } from "react-icons/fa6";
import { BiSun } from "react-icons/bi";

const Header = () => {
    const [Theme , setTheme] = useState(localStorage.getItem("Theme") ? localStorage.getItem("Theme") : "light");

    useEffect(() => {
     if (Theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.setItem("Theme","dark");
     }
     else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("Theme","light");

     }

    }, [Theme])
    

    const name = "Adrito Rafsan";
    return (
        <div className=' max-w-screen-2xl'>
            <div>
                <div className='flex justify-between items-center'><div className='flex gap-5 items-center'><img className='rounded-full cursor-pointer w-[60px] h-[60px]' src={logo} alt="" /><h1 className='font-poppins text-base font-bold dark:text-white text-black/70'>{name}</h1></div>{
                    Theme === "dark" ? (< BiSun className='cursor-pointer text-3xl text-white' onClick={()=> setTheme('light')} />) : (< FaMoon className='cursor-pointer text-3xl' onClick={()=> setTheme('dark')} />)
                }</div>
                <div>
                    <div></div>
                    <div></div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                   <div></div>
                </div>
            </div>
        </div>
    )
}

export default Header