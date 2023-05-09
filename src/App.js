import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
// components
import { Menu } from "./components/Menu"
import { ImageDisplay } from "./components/ImageDisplay"

// images
import aboutmesrc from './media/about-me.png'

export default function App() {
  const [activeImage, setActiveImage] = useState(aboutmesrc);
  return (
    <Router>
    <Routes>
          <Route path="/" element={
          <div className='flex'>
            <Menu onHover={setActiveImage} />
              <div className="flex-1 overflow-hidden">
                <ImageDisplay src={activeImage} />
              </div>
          </div>} 
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
  )
}
