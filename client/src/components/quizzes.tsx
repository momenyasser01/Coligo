import { useTranslation } from 'react-i18next'
import Quiz from './quiz'

function Quizzes() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col h-auto rounded-lg shadow-sm gap-8 pl-4 pr-2 pt-3 pb-8 bg-white">
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="text-xl font-semibold">{t(`What's due`)}</p>
          <p className="text-sm text-gray-400">
            {t(`Lorem ipsum dolor sit amet consectetur.`)}
          </p>
        </div>

        <button className="pr-3 text-xl font-semibold">{t(`All`)}</button>
      </div>
      <div className="flex flex-col gap-8 pr-3 pb-6">
        <Quiz />
        <div className="border-gray-200 border-[1px] w-full"></div>
        <Quiz />
      </div>
    </div>
  )
}

export default Quizzes
