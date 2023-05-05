import React, { useState } from 'react';

export function Menu() {
  const [activeItem, setActiveItem] = useState(null);

  const handleHover = (e) => {
    setActiveItem(e.target.innerText);
    // TODO: Add your logic to display the image on hover
  };

//   const handleLeave = (e) => {
//     setActiveItem(null);
//   };

  const getItemClass = (text) => {
    if (text === activeItem) {
      return "bg-gray-200 text-blue-600";
    } else {
      return "hover:bg-gray-200 hover:text-blue-600";
    }
  };

  return (
    <nav className="flex flex-col h-screen bg-gray-100 w-1/6 border-r border-gray-500">
      <div className={`p-4 border-t border-b h-1/3 cursor-pointer ${getItemClass("About Me")}`} onMouseEnter={handleHover}>
        About Me
      </div>
      <div className={`p-4 border-t border-b h-1/3 cursor-pointer ${getItemClass("Easy Layers")}`} onMouseEnter={handleHover}>
        Easy Layers
      </div>
      <div className={`p-4 border-t border-b h-1/3 cursor-pointer ${getItemClass("React Roulette")}`} onMouseEnter={handleHover}>
        React Roulette
      </div>
    </nav>
  );
}