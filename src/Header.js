import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './asset/klob-logo.png'

class Header extends Component {

    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark mx-auto'>
                    
                        <img  className='navbar-brand text-primary' src={logo} />
                    
                    
                </nav>

            </div>
        )
    }
}

export default Header