import { useTranslation } from 'react-i18next'
import img1 from '../assets/img1.png'

function ExamsTime() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-row bg-white w-full rounded-lg shadow-sm  h-64">
      <div className="flex flex-col gap-3 md:gap-8 w-full">
        <div className="flex flex-col gap-3">
          <p className="text-black font-bold text-4xl pt-4 md:pt-8 pl-8">
            {t('EXAMS TIME')}
          </p>
          <p className="text-black text-sm pl-8">
            {t(`Here we are, Are you ready to fight? Don't worry, we prepared
          some tips to be ready for your exams.`)}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-400 text-sm pl-8">
            {t(`"Nothing happens until something moves" - Albert Einstein`)}
          </p>
          <button
            style={{ fontSize: 'clamp(0.8rem, 1vw, 1rem)' }}
            className="bg-black rounded-lg font-semibold text-white hover:opacity-90 w-40 md:w-48 h-11 ml-8 mt-2"
          >
            {t(`View exams tips`)}
          </button>
        </div>
      </div>

      <img
        src={img1}
        alt=""
        className="hidden lg:flex right-6 w-96 h-60"
        height={0}
        width={0}
      />
    </div>
  )
}

export default ExamsTime
