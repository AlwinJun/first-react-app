import reactLogo from '../assets/react.svg';

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div className="logo">
          <img src={reactLogo} className="logo" alt="reactLogo" />
          <span>ReactFacts</span>
        </div>
        <p>First React App</p>
      </nav>
    </header>
  );
};

export default Header;
