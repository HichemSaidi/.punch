import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

function BurgerMenuButton() {
  const value = useSelector(state => state.bool.value);
  const dispatch = useDispatch();

  return (
    <button
      className="bg-white hover:bg-gray-200 rounded-full focus:outline-none focus:shadow-outline-blue"
      onClick={() => dispatch({ type: 'TOGGLE' })}
    >
      <CSSTransition
        in={value}
        timeout={300}
        classNames="burger-menu"
        unmountOnExit
      >
        <div className="burger-menu-cross h-6 w-6 transform duration-300">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </CSSTransition>
      <CSSTransition
        in={!value}
        timeout={300}
        classNames="burger-menu"
        unmountOnExit
      >
        <div className="burger-menu-burger h-6 w-6 transform duration-300">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </CSSTransition>
    </button>
  );
}

export default BurgerMenuButton;
