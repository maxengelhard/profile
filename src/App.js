import { useState } from 'react';
// components
import { Menu } from "./components/Menu"
import { ImageDisplay } from "./components/ImageDisplay"

// images
import easyLayersrc from './media/easy-layers.png'

export default function App() {
  const [activeImage, setActiveImage] = useState(easyLayersrc);
  return (
    <div className='flex'>
    <Menu onHover={setActiveImage} />
    <div className="flex-1 overflow-hidden">
    <ImageDisplay src={activeImage} />
    </div>
    </div>
  )
}
