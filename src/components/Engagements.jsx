import React from 'react'
import icon1 from '../Icons/icon1.svg'


const Engagements = () => {

  const Engagements = [
    {name:"Stop Watch ", icon:icon1, date:"Ongoing / 2024"},
    {name:"Rafsan", icon:icon1, date:"Portfolio / 2024"},
    {name:"Apple Calculator", icon:icon1, date:"Calculator / 2024"},
    {name:"Web Agency", icon:icon1, date:"Webapp / 2024"},
    {name:"Password Generator", icon:icon1, date:"Random / 2023"},

  ]
  return (
    <div className='mt-24'>
      <p className='text-xl '>Recent Engagements</p>
      <div className='bg-[#f7f6f6] rounded-[20px] p-5'>
        <div className='flex  gap-3 flex-col border-none'>
          {Engagements.map(({name,icon, date}) =>(
            <a className='group flex justify-between cursor-pointer rounded-2xl divide-y divide-slate-700 h-[40px] items-center'>
              <div className='flex gap-x-[6px] justify-center items-center'> <p className='group-hover:underline text-[20px] text-[#272d36]'>{name}</p><img   src={icon} alt="" /></div>
              <p className='text-[#000000] opacity-50 text-[20px]'>{date}</p>      
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Engagements