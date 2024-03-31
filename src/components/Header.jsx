import React from 'react';
import { useLocation, Link } from "react-router-dom";

const Header = () => {
    const {pathname} = useLocation()
    const albumsPath = pathname.includes('photos') 
        ? pathname.split('/').slice(0, -2).join('/')
        : null

    return (<header className="header">
        <h1>USERS DB</h1>
        <div className="headerBtns">
            {
                pathname === '/users' ? '' : (<button>
                    <Link to={'/users'}>Back to users</Link>
                </button>)
            }
            {
                albumsPath && (<button>
                    <Link to={`${albumsPath}`}>Back to albums</Link>
                </button>)
            }
        </div>
    </header>)
}

export default Header