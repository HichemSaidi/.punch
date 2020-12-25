import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <div>
              <div class="row">
                  <div className="seg-1"> 
                         <h1>.punch</h1>
                  </div>
                 
                  <div className="seg-2"> 
                        <ul>
                            <li>Features </li>
                            <li>Why .punch </li>
                            <li>Pricing </li>
                            <li>Blog </li>
                        </ul>  
                    <button className='btn'> Sign up</button> 
                
                  </div>
              </div>
            </div>
        )
    }
}
