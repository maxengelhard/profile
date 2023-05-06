import { useState } from 'react';
// components
import { Menu } from "./components/Menu"
import { ImageDisplay } from "./components/ImageDisplay"

export default function App() {
  const [activeImage, setActiveImage] = useState('/meida/easy-layers.png');
  return (
    <div>
    <Menu onHover={setActiveImage} />
    <ImageDisplay src={activeImage} />
    </div>
  )
}
