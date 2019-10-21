import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div>
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark mx-auto'>
                    
                        <a className='navbar-brand text-primary'>SWAPI</a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <Link to='/'>
                            <li className="nav-item active">
                                <a className="nav-link">Movies <span class="sr-only"></span></a>
                            </li>
                            </Link>
                            <Link to='/characters'>
                            <li className="nav-item active">
                                <a class="nav-link">Characters</a>
                            </li>
                            </Link>
                        </ul>

                    </div>
                </nav>

            </div>
        )
    }
}

export default Header