import { useTranslation } from 'react-i18next'
import { FaSearch } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import Dropdown from './dropdown'

function Header() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-row items-center justify-center md:justify-between w-full h-full bg-white">
      <p className="hidden md:flex text-xl md:text-2xl lg:text-3xl text-black font-bold pl-4 md:pl-20">
        {t('Welcome')} Josh,
      </p>
      <div className="flex flex-row justify-center md:justify-end items-center gap-4 w-[95%] md:w-1/2 h-full md:pr-6">
        <div className="relative md:w-1/2">
          <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-slate-400" />
          <input
            className="flex w-full h-10 rounded-full pl-10 pr-4 text-sm text-black placeholder-slate-400 border-slate-200 border-2"
            placeholder="Search"
          />
        </div>

        <IoIosNotifications className="w-10 md:w-8 h-10 md:h-8" />
        <MdEmail className="w-10 md:w-8 h-10 md:h-8" />
        <Dropdown />
      </div>
    </div>
  )
}

export default Header
