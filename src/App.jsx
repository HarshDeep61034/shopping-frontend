import './styles/App.css'
import Navbar from './components/Navbar'
import Mainsection from './components/Mainsection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="app">
        <Navbar page={"Home"}/>
        <Mainsection />
        <Footer />
      </div>
    </>
  )
}

export default App
