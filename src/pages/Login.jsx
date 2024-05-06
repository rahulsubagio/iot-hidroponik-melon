import { useState } from "react"
import Footer from "../components/Footer"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCredential)
      const user = userCredential.user
      localStorage.setItem('token', user.accessToken)
      localStorage.setItem('user', JSON.stringify(user))
      navigate("/dashboard")
    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <div className="container">
      <main>
        <div className="card">
          <img src="/iot-logo.png" alt="iot logo" className="iot-logo"/>
          <h2 className="mt-10 font-semibold animate-bounce text-hijo-dark">Ayo Bertani!</h2>

          <form onSubmit={handleSubmit} className="w-64 mt-4">
            <label className="block">
              <input type="email" placeholder="Email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label className="block mt-2">
              <input type="password" placeholder="Password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit" className="mt-10 button-login">
              <h4>Login</h4>
            </button>
          </form>

            <a href="/" className="button-back">
              <h4>Kembali</h4>
            </a>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Login
