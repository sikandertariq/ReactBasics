import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/api">ApiApp</Link></li>

                
            </ul>
        </nav>
    );
};