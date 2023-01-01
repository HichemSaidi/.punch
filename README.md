# Demo React App Image
This project is an intégration based on this design found on [dribble](https://dribbble.com/shots/14375856/attachments/6045671?mode=media).\
The Responsive design is in progress
![](images/demo.png)




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function LateralMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <CSSTransition in={isOpen} timeout={200} classNames="menu" unmountOnExit>
        <div className="fixed inset-0 flex flex-col">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75"></div>
          <div className="relative z-10 flex-1 flex flex-col bg-white">
            {/* Menu items go here */}
          </div>
        </div>
      </CSSTransition>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 bg-gray-800 rounded-full focus:outline-none"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  );
}
