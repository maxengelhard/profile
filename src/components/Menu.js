import React, { useState } from 'react';

// images
import aboutmesrc from '../media/about-me.png'
import easyLayersrc from '../media/easy-layers.png'
import reactRoulletesrc from '../media/react-roulette.png'



export function Menu(props) {
  const [activeItem, setActiveItem] = useState("About Me");

  const projectObj = {
    'easy-layers': {'img': easyLayersrc, 'comp' : 'easy-layers', 'url': 'https://easylayers.dev/' },
    'react-roulette' : {'img': reactRoulletesrc, 'comp' : 'react-roulette', 'url': 'https://roullete-app-487adb.netlify.app/'},
    'about-me': {'img': aboutmesrc, 'comp' : 'about-me', 'url': 'https://github.com/maxengelhard'} 
  }

  const handleHover = (e) => {
    const item = e.target.innerText;
    setActiveItem(item);
    const image = item.toLowerCase().replace(' ','-')
    props.onHover(projectObj[image]);
  };

//   const handleLeave = (e) => {
//     setActiveItem(null);
//   };

  const getItemClass = (text) => {
    if (text === activeItem) {
      return "bg-black text-white";
    } else {
      return "hover:bg-gray-200 hover:text-blue-600";
    }
  };

  return (
    <nav className="flex flex-col h-screen bg-gray-100 w-1/6 border-r border-gray-500">
      <div className={`p-4 h-1/3 cursor-pointer ${getItemClass("About Me")}`} onMouseEnter={handleHover}>
        About Me
      </div>
      <div className={`p-4 h-1/3 cursor-pointer ${getItemClass("Easy Layers")}`} onMouseEnter={handleHover}>
        Easy Layers
      </div>
      <div className={`p-4 h-1/3 cursor-pointer ${getItemClass("React Roulette")}`} onMouseEnter={handleHover}>
        React Roulette
      </div>
    </nav>
  );
}