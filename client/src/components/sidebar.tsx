import {
  FaBook,
  FaBullhorn,
  FaChartLine,
  FaGraduationCap,
  FaHome,
  FaRegCalendarAlt,
} from 'react-icons/fa'

import SidebarLink from './sidebarLink'

function Sidebar() {
  return (
    <div className="flex flex-col items-center bg-black w-full h-full">
      <p className="hidden lg:flex text-3xl text-white py-3 h-[13%]">Coligo</p>
      <div className="flex flex-row md:flex-col justify-between md:justify-center items-center md:gap-8 w-full h-full lg:h-[50%]">
        <SidebarLink icon={<FaHome />} label="Dashboard" />
        <SidebarLink icon={<FaRegCalendarAlt />} label="Schedule" />
        <SidebarLink icon={<FaBook />} label="Courses" />
        <SidebarLink icon={<FaGraduationCap />} label="Gradebook" />
        <SidebarLink icon={<FaChartLine />} label="Performance" />
        <SidebarLink icon={<FaBullhorn />} label="Announcement" />
      </div>

      {/* <button className="absolute bottom-2 rounded-sm text-white hover:text-red-600 md:w-[8%] lg:w-[12%]">
        Logout
      </button> */}
    </div>
  )
}

export default Sidebar
