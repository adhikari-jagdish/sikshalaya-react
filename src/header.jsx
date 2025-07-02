import './styles.css'

function Header() {
    return (
        <header>
            <div class="title">Sikshalaya College</div>
            <nav class="menu">
                <a href='#'>Home</a>
                <a href='#'>About Us</a>
                <a href='#'>Courses</a>
                <a href='#'>Admissions</a>
                <a href='#'>Contact Us</a>
            </nav>
            <div class = "logout">
                <button>Logout</button>
            </div>
        </header>
    );
}

export default Header;