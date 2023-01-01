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
  
  =======================================================
  import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

function LateralMenu() {
  const value = useSelector(state => state.bool.value);

  return (
    <CSSTransition
      in={value}
      timeout={300}
      classNames="lateral-menu"
      unmountOnExit
    >
      <div
        className="lateral-menu fixed inset-0 z-50 h-full flex items-start justify-center bg-gray-100 shadow-xl"
        style={{ width: '350px' }}
      >
        <div className="p-4 hover:bg-gray-200 rounded-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </CSSTransition>
  );
}

export default LateralMenu;
In this code, the content of the lateral menu is a div element with the classes p-4 hover:bg-gray-200 rounded-lg, which add some padding, a hover effect that changes the background color to gray, and rounded corners.



