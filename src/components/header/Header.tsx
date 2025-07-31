import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">MyApp</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/detail">Movie Detail</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
