import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { Icon } from "@iconify/react/dist/iconify.js"

const Sidebar = () => {
  
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      navigate("/")
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <aside className="h-screen">
      <nav className="flex flex-col w-64 h-full bg-white border-r shadow-sm">
        <div className="flex items-center justify-between p-4 pb-2">
          <a href="#" className="font-semibold">
            <div className="flex">
              <img src="/public/iot-logo.png" className="w-12" alt="" />
            </div>
          </a>
          <button className="flex items-center p-1.5 rounded-md text-slate-600 bg-slate-200 hover:bg-slate-100">
            <h2><Icon icon="material-symbols:menu-open-rounded" /></h2>
          </button>
        </div>
        <hr />
        <ul className="flex-1 h-full p-3">
          <li className="flex items-center px-3 py-3 font-semibold rounded-md itemw-full hover:bg-hijo-light text-slate-600">
            <h2><Icon icon="material-symbols:dashboard-outline-rounded" /></h2>
            <h4 className="ml-3">Dashboard</h4>
          </li>
          <li className="flex items-center px-3 py-3 font-semibold rounded-md itemw-full hover:bg-hijo-light text-slate-600">
            <h2><Icon icon="material-symbols:bar-chart-4-bars-rounded" /></h2>
            <h4 className="ml-3">Statistik</h4>
          </li>
          <li className="flex items-center px-3 py-3 font-semibold rounded-md itemw-full hover:bg-hijo-light text-slate-600">
            <h2><Icon icon="material-symbols:dashboard-outline-rounded" /></h2>
            <h4 className="ml-3">Sensor</h4>
          </li>
          <li className="flex items-center px-3 py-3 font-semibold rounded-md itemw-full hover:bg-hijo-light text-slate-600">
            <h2><Icon icon="material-symbols:bar-chart-4-bars-rounded" /></h2>
            <h4 className="ml-3">Log</h4>
          </li>
          <li className="flex items-center px-3 py-3 font-semibold rounded-md itemw-full hover:bg-hijo-light text-slate-600">
            <h2><Icon icon="material-symbols:dashboard-outline-rounded" /></h2>
            <h4 className="ml-3">Water Level</h4>
          </li>
          <li className="flex items-center px-3 py-3 font-semibold rounded-md itemw-full hover:bg-hijo-light text-slate-600">
            <h2><Icon icon="material-symbols:bar-chart-4-bars-rounded" /></h2>
            <h4 className="ml-3">Status</h4>
          </li>
          <hr className="my-2" />
          <li className="flex items-center px-3 py-3 font-semibold rounded-md itemw-full hover:bg-hijo-light text-slate-600">
            <h2><Icon icon="material-symbols:person-4-outline-rounded" /></h2>
            <h4 className="ml-3">{user && user.email}</h4>
          </li>
          <li className="flex items-center px-3 py-3 font-semibold text-red-500 rounded-md itemw-full hover:bg-hijo-light">
            <h2><Icon icon="material-symbols:logout-rounded" /></h2>
            <button onClick={handleLogout}>
              <h4 className="ml-3">Logout</h4>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar