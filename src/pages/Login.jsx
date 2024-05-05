import Footer from "../components/Footer"

const Login = () => {
  return (
    <div className="body">
      <main>
        <div className="card">
          <img src="/iot-logo.png" alt="iot logo" className="iot-logo"/>
          <h2 className="mt-10 font-semibold text-hijo-dark">Ayo Bertani!</h2>

          <form action="/dashboard" className="w-64 mt-4">
            <label className="block">
              <input type="email" name="email" id="email" placeholder="Email" className="form-input" />
            </label>
            <label className="block mt-2">
              <input type="password" name="password" id="password" placeholder="Password" className="form-input"/>
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
