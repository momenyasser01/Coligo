import { useTranslation } from 'react-i18next'
import { FaHourglassHalf } from 'react-icons/fa'

function Quiz() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <FaHourglassHalf />
          <p className="text-sm font-semibold">
            {t(`Unit`)} 2 {t(`quiz`)}
          </p>
        </div>
        <p className="text-sm text-gray-400">
          {t(`Course`)}: {t(`Physics`)} 02
        </p>
        <p className="text-sm text-gray-400">
          {t(`Topic`)}: {t(`Unit`)} 2: {t(`Motion`)} {t(`and`)} {t(`forces`)}
        </p>
        <p className="text-sm text-gray-400">
          {t(`Due to`)}: 20 Dec 2017 - 09:00 PM
        </p>
      </div>

      <button className=" border-black border-2 rounded-lg font-semibold hover:bg-black hover:text-white w-full h-10">
        {t(`Start Quiz`)}
      </button>
    </div>
  )
}

export default Quiz
