import Announcements from '../components/announcements'
import ExamsTime from '../components/examsTime'
import Header from '../components/header'
import Quizzes from '../components/quizzes'
import Sidebar from '../components/sidebar'

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-gray-100 overflow-y-auto">
      <div className="hidden fixed md:flex h-full md:w-[8%] lg:w-[12%]">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full md:w-[92%] lg:w-[88%] h-full gap-6 ml-auto">
        <div className="min-h-20">
          <Header />
        </div>
        <div className="flex flex-col items-center w-full pl-6 pr-6 gap-6">
          <ExamsTime />
          <div className="flex flex-col lg:flex-row justify-center w-full gap-6">
            <div className="w-[100%] lg:w-[75%] min-h-96">
              <Announcements />
            </div>
            <div className="w-[100%] lg:w-[25%] min-h-96 pb-24">
              <Quizzes />
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex fixed bottom-0 h-14 w-full">
        <Sidebar />
      </div>
    </div>
  )
}

export default Dashboard
