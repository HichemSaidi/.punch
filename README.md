import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function LateralMenu() {
  const [showMenu, setShowMenu] = useState(false);

  function handleClose() {
    setShowMenu(false);
  }

  return (
    <div>
      <button onClick={() => setShowMenu(true)}>Open menu</button>
      <CSSTransition
        in={showMenu}
        timeout={200}
        classNames="left-menu"
        unmountOnExit
      >
        <div className="fixed w-64 h-full bg-white z-40 left-0 top-0 overflow-y-auto">
          <button
            className="absolute top-0 right-0 p-4"
            onClick={handleClose}
          >
            ×
          </button>
          <ul className="mt-10">
            <li className="px-4 py-2 font-bold text-lg text-gray-800 hover:bg-gray-300">
              Menu item 1
            </li>
            <li className="px-4 py-2 font-bold text-lg text-gray-800 hover:bg-gray-300">
              Menu item 2
            </li>
            <li className="px-4 py-2 font-bold text-lg text-gray-800 hover:bg-gray-300">
              Menu item 3
            </li>
          </ul>
        </div>
      </CSSTransition>
