import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    return (
        <nav className="w-full py-5 sticky top-0 bg-white shadow-md z-50">
            <ul className="w-full flex justify-center space-x-4">
                <li
                    className={
                        location.pathname === '/' ? 'active font-semibold' : ''
                    }
                >
                    <NavLink to="/">Home</NavLink>
                </li>
                <li
                    className={
                        location.pathname === '/users'
                            ? 'active font-semibold'
                            : ''
                    }
                >
                    <NavLink to="/users">Users</NavLink>
                </li>
                <li
                    className={
                        location.pathname === '/posts'
                            ? 'active font-semibold'
                            : ''
                    }
                >
                    <NavLink to="/posts">Posts</NavLink>
                </li>
            </ul>
        </nav>
    );
}
