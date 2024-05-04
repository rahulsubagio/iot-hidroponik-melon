import Logo from "../components/Logo"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="body">
      <main>
        <div className="card">
          <Logo/>
          <h4 className="judul">
            Implementasi Adaptive Fuzzy Logic Controller untuk Pengaturan Nutrisi Otomatis pada Tanaman Hidroponik Melon
          </h4>
          <a href="/login" className="button">
            <h4>Login</h4>
          </a>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
