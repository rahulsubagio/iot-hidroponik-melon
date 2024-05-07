import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import Sidebar from "../components/Sidebar"

const Dashboard = () => {
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
    <>
      <Sidebar/>
      <div className="container">
        <main className="mt-0">  
          <h1>Ini halaman dashboard</h1>
          <h2>{user && user.email}</h2>
          <button onClick={handleLogout} className="button-back">
            <h4>Logout</h4>
          </button>
        </main>
      </div>
    </>
  )
}

export default Dashboard
