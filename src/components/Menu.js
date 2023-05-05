// components/Layout.js
import React from 'react';

export function Menu() {
  return (
    <>
      <nav className="flex flex-col h-screen bg-gray-100 w-1/6 border-r border-gray-500">
        <div className="p-4">Github</div>
        <div className="p-4">Easy Layers</div>
        <div className="p-4">React Roulette</div>  
        </nav>
    </>
  );
}