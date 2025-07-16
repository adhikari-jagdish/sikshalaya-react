import './styles.css'

function Header() {
    return (
        <header>
            <div class="title">Sikshalaya College</div>
            <nav class="menu">
                <a href='/'>Home</a>
                <a href='/about-us'>About Us</a>
                <a href='/courses'>Courses</a>
                <a href='/admissions'>Admissions</a>
                <a href='/contact-us'>Contact Us</a>
            </nav>
            <div class = "logout">
                <button>Logout</button>
            </div>
        </header>
    );
}

export default Header;