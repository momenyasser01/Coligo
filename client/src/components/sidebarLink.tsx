import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

interface SidebarLinkProps {
  icon: React.ReactNode
  label: string
}

function SidebarLink({ icon, label }: SidebarLinkProps) {
  const { t } = useTranslation()

  const location = useLocation()
  const isActive = location.pathname.substring(1) === label.toLowerCase()

  return (
    <a
      className={`flex justify-center md:justify-start items-center text-lg text-center rounded-sm w-[12%] md:w-[97%] h-[97%] md:h-[12%] md:gap-4 md:pl-6 ${isActive ? 'bg-white text-black font-semibold' : 'text-white hover:bg-white hover:text-black hover:font-semibold'} `}
    >
      {icon}
      <p
        className="hidden lg:flex"
        style={{ fontSize: 'clamp(0.01rem, 1vw, 1rem)' }}
      >
        {t(label)}
      </p>
    </a>
  )
}

export default SidebarLink
