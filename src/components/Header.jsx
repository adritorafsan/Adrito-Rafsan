import { useState, useEffect } from 'react';
// Import You Profile Img
import logo from '../img/profile.jpg'

// Icons For Light and Dark Mode 
import { FaMoon } from "react-icons/fa6";
import { BiSun } from "react-icons/bi";

const Header = () => {
    // For Light and Dark mode
    const [Theme, setTheme] = useState(localStorage.getItem("Theme") ? localStorage.getItem("Theme") : "light");

    useEffect(() => {
        if (Theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem("Theme", "dark");
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem("Theme", "light");

        }

    }, [Theme])

    // TEXT PART
    const name = "Adrito Rafsan";
    const Heading1 = "Creating software";
    const Heading2 = "Creating software that functions seamlessly.";
    const Introduction = "I’m Rafsan, a freelance product designer located in Bangladesh. Partnering with companies to create digital interfaces that play a crucial role in realising their objectives for future success.";

    // SOCIAL LINKS
    const sociallinks = [
        { socalname: "Email ", link: "adritorafsan@gmail.com", name: "hey@adritorafsan.co" },
        { socalname: "Twitter  ", link: "https://twitter.com/adrito_rafsan", name: "@adrito_rafsan" },
        { socalname: "Instagram", link: "https://www.instagram.com/adritorafsan/", name: "adritorafsan" },
    ]

    // Having Current MONTH
    const Month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const d = new Date();
    let currentmont = Month[d.getMonth()];

    const companies = [
        {companyIcon:"1", company:"Apple"},
        {companyIcon:"2", company:"Microsoft"},
        {companyIcon:"3", company:"Facebook"},
        {companyIcon:"4", company:"Tesla"},
        {companyIcon:"6", company:"Google"},
    ]

    return (
        <div className=' max-w-screen-2xl'>
            <div className='space-y-20'>
                <div className='flex justify-between items-center'><div className='flex gap-5 items-center'><img className='rounded-full cursor-pointer w-[60px] h-[60px]' src={logo} alt="" /><h1 className='font-poppins text-sm md:text-base font-bold dark:text-white text-black/70'>{name}</h1></div><div className={` p-2 rounded-xl text-center cursor-pointer  ${Theme === 'dark' ? ("bg-[#fcfcfb] text-black") : ("bg-slate-800 text-white")}`}>{
                    Theme === "dark" ? (< BiSun className='text-xl md:text-3xl' onClick={() => setTheme('light')} />) : (< FaMoon className='text-xl md:text-3xl' onClick={() => setTheme('dark')} />)
                }</div></div>
                <div className='font-poppins dark:text-bgcolor text-primary space-y-10'>
                    <div><p className='text-2xl '>{Heading1}<br />{Heading2}</p></div>
                    <div className='md:w-2/3 w-full'><p className='text-[19px] leading-[24px] '>{Introduction}</p></div>

                    <div>{
                        sociallinks.map(({ socalname, link, name }) => <p key={name} className=' h-3  flex gap-x-2 text-lg items-center font-medium  font-poppins'><p>{socalname}</p> / <a className='no-underline dark:text-bgcolor text-primary hover:underline' href={link} target='_blank'>{name}</a></p>)
                    }</div>
                    <div className='dark:bg-primary  bg-[#f1f1f1] flex  space-x-3 rounded-2xl p-1 w-fit'>
                        <button  className='h-[40px] bg-black text-white border-none rounded-xl w-36 cursor-pointer sm:text-[14px] font-poppins'>Reach out via mail</button>
                        <button  className='flex justify-start dark:bg-primary dark:text-white gap-1 items-center h-[40px] border-none rounded-xl w-36 cursor-pointer  sm:text-[15px] font-poppins'><p className='size-2 rounded-full bg-green-500'></p> Available for {currentmont}</button>
                    </div>
                </div>
               
                   <marquee behavior="scroll" direction="left" scrollamount="4"> 
                   <div className='flex gap-6'>
                   {companies.map(({companyIcon,company}) =>
                        <div key={companyIcon} className='flex gap-2 text-2xl'>                          
                            <span>{companyIcon}</span>
                            <span>{company}</span>                    
                        </div>
                    )}</div>
                    </marquee>
                
            </div>
        </div>
    )
}

export default Header