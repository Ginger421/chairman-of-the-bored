import React from 'react';
//create and import Logo
import Logo from './../../public/logo192.png';
import { Link } from 'react-router-dom';

const Header = ({
    ...otherProps
}) => {
    return (
        <header className= "bg-teal-700 relative">

            <div className="max-w-7xl mx auto flex items-center justify-between">

            <div className="w-14">
               <img src= {Logo} className="w-full" /> 
            </div>

            <div>
                Chairman of the Bored
            </div>

            <nav>
                <ul>
                    <li>
                        <Link>
                            Page
                        </Link>
                    </li>

                    <li>
                        <Link>
                            Page
                        </Link>
                    </li>

                    <li>
                        <Link>
                            Page
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    );
};

export default Header; 