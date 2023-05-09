import { useState } from 'react';
// components
import { Menu } from "./components/Menu"
import { ImageDisplay } from "./components/ImageDisplay"

// images
import aboutmesrc from './media/about-me.png'

export default function App() {
  const [activeImage, setActiveImage] = useState(aboutmesrc);
  return (
    <div className='flex'>
    <Menu onHover={setActiveImage} />
    <div className="flex-1 overflow-hidden">
    <ImageDisplay src={activeImage} />
    </div>
    </div>
  )
}
