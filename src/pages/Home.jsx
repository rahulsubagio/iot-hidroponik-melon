import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="body">
      <main>
        <div className="card">
          <img src="/iot-logo.png" alt="iot logo" className="iot-logo"/>
          <h4 className="text-center font-semibold my-5 text-hijo-dark">
            Implementasi Adaptive Fuzzy Logic Controller untuk Pengaturan Nutrisi Otomatis pada Tanaman Hidroponik Melon
          </h4>
          <a href="/login" className="button-login">
            <h4>Login</h4>
          </a>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
