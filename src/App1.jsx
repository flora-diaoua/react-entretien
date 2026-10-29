// App1.jsx
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"

import ProfileCard from "./components/ProfileCard"


function App1() {
  return (
    <div className="bg-gray-100 min-h-screen pb-6">
      <ProfileCard nom="Flora" emoji="👩🏾‍💻" metier="Développeuse front-end"/>
      <ProfileCard nom="Kevin" emoji="🎨" metier="Designer"/>
    </div>
  )
}

export default App1
