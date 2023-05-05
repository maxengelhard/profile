import React from 'react';

export function Menu() {
    const handleHover = (e) => {
        // TODO: Add your logic to display the image on hover
      };
    
      return (
        <nav className="flex flex-col h-screen bg-gray-100 w-1/6 border-r border-gray-500">
          <div className="p-4 border-t border-b h-1/3 hover:bg-gray-200 hover:text-blue-600 cursor-pointer" onMouseEnter={handleHover}>
            Github
          </div>
          <div className="p-4 border-t border-b h-1/3 hover:bg-gray-200 hover:text-blue-600 cursor-pointer" onMouseEnter={handleHover}>
            Easy Layers
          </div>
          <div className="p-4 border-t border-b h-1/3 hover:bg-gray-200 hover:text-blue-600 cursor-pointer" onMouseEnter={handleHover}>
            React Roulette
          </div>
        </nav>
      );
}