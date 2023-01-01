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

  ==============================================================================================================
  import React from 'react';
import { CSSTransition } from 'react-transition-group';

function LateralMenu({ showMenu }) {
  return (
    <CSSTransition
      in={showMenu}
      timeout={200}
      classNames="left-menu"
      unmountOnExit
    >
      <div className="fixed w-64 h-full bg-white z-40 left-0 top-0 overflow-y-auto">
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
  );
}

export default LateralMenu;
======================================================================================================================================
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
=================================================================================================================================================

<LateralMenu showMenu={true} />
