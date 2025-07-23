import { useTranslation } from 'react-i18next'

function Announcement() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 w-full h-auto">
      <div className="flex flex-row items-center gap-4 min-w-[180px] ">
        <img
          src="https://i.pravatar.cc/150?img=57"
          alt=""
          className="w-12 h-12 rounded-full"
        ></img>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold">Mr. Ahmed Mostafa</p>
          <p className="text-sm text-gray-400">{t(`Math 101`)}</p>
        </div>
      </div>
      <div className="hidden lg:flex border-gray-200 border-[1px] h-auto"></div>
      <p className="text-sm text-gray-400 break-words flex-1 min-w-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        asperiores magni ipsum ipsa nesciunt mollitia ex velit harum obcaecati
        veritatis atque cum illo, aliquam, quidem labore, pariatur odit eum
        cumque?
      </p>
    </div>
  )
}

export default Announcement
