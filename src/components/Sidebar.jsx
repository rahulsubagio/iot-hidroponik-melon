/* eslint-disable react/prop-types */
import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useState } from "react"

const Sidebar = ({ sideItem, activeTab, setActiveTab }) => {
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  const [expanded, setExpanded] = useState(false)
   
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
    <>
      <nav className={`side-head ${expanded ? "w-64" : "w-14"}`}>
        <div className={`flex items-center justify-between pb-2 ${expanded ? "p-4" : "px-2 pt-4"}`}>
          <img src="/iot-logo.png" className={`side-close ${expanded ? "w-10" : "w-0"}`} alt="logo iot" />
          <button onClick={() => setExpanded((curr) => !curr)} className={`btn-side ${expanded ? "" : "mx-auto"}`}>
            <h3><Icon icon="material-symbols:menu-open-rounded" /></h3>
          </button>
        </div>
        
        <hr />

        <ul className="flex-1 h-full p-2">
          {sideItem.map((item, index) => (
            <li className="mt-1" key={item.name}>
              <button onClick={() => setActiveTab(index)} className={`side-item ${index === activeTab && "active"}`}>
                <h3>{item.icon}</h3>
                <p className={`ml-3 side-close ${expanded ? "" : "hidden"}`}>{item.name}</p>
              </button>
            </li>
          ))}

          <hr className="my-2" />

          <li className="side-item">
            <h3><Icon icon="material-symbols:person-4-outline-rounded" /></h3>
            <p className={`ml-3 side-close ${expanded ? "" : "hidden"}`}>{user && user.email}</p>
          </li>
          <li className="side-item">
            <button onClick={handleLogout} className="flex">
              <h3 className="text-red-500"><Icon icon="material-symbols:logout-rounded" /></h3>
              <p className={`ml-3 text-red-500 side-close ${expanded ? "" : "hidden"}`}>Logout</p>
            </button>
          </li>
        </ul>

      </nav>
    </>
  )
}

export default Sidebar