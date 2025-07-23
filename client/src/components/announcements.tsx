import { useTranslation } from 'react-i18next'
import Announcement from './announcement'

function Announcements() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-8 pl-4 pr-1 pt-2 rounded-lg shadow-sm bg-white">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold">{t(`Announcements`)}</p>
          <p className="text-sm text-gray-400">
            {t(`Lorem ipsum dolor sit amet consectetur.`)}
          </p>
        </div>

        <button className="pr-3 text-xl font-semibold">{t(`All`)}</button>
      </div>
      <div className="flex flex-col gap-6 items-center pl-4 pr-5 pb-6">
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
      </div>
    </div>
  )
}

export default Announcements
