import React, { useState } from 'react'
import { Avatar } from "primereact/avatar";
import { Menu } from "lucide-react";

const TopBar = ({ handleSideBar }) => {
  return (
    <div id='home' className='flex justify-between items-center flex-wrap'>
      <div className="flex justify-start items-center gap-4">
          <Menu className="text-gray-500 hover:bg-blue-500 hover:text-white hover:rounded-full hover:cursor-pointer p-2" size={36} onClick={handleSideBar} />
        <h2 className='text-lg text-gray-600 font-medium'>Sales Dashboard</h2>
      </div>
        <Avatar image={"https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp"} shape="circle" className='p-1' style={{ backgroundColor: "gray" }} />
    </div>
  )
}

export default TopBar
