import "./Header.css";

function Header() {
    return(
        <header className="header">
        <div className="header-container">
            <div className="logo">
                <h1>NewsHub.</h1>
            </div>
            <div className="icon-container">
                <a href="https://github.com/RiyaGupta89">
                        <i class="fab fa-2x fa-github"></i>
                </a>
            </div>
            </div>
        </header>
    );
}

export default Header;