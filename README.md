import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

function LateralMenu({ showMenu, setShowMenu }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowMenu]);

  function handleClose() {
    setShowMenu(false);
  }

  return (
    <CSSTransition
      in={showMenu}
      timeout={200}
      classNames="left-menu"
      unmountOnExit
    >
      <div ref={ref} className="fixed w-64 h-full bg-white z-40 left-0 top-0 overflow-y-auto">
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
    <style>
      .left-menu-enter {
        transform: translateX(-100%);
      }
  
      .left-menu-enter-active {
        transform: translateX(0);
        transition: transform 200ms;
      }
  
      .left-menu-exit {
        transform: translateX(0);
      }
  
      .left-menu-exit-active {
        transform: translateX(-100%);
        transition: transform 200ms;
      }
    </style>
  );
}
