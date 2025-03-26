import { Navbar } from "./components/Navbar/Navbar"
import { Body } from "./components/Body/Body"

function App() {

    return (
      <div className='app-container w-[100vw] h-[100vh] bg-gray-100'>
        <Navbar />
        <Body />
      </div>
    )
}

export default App
