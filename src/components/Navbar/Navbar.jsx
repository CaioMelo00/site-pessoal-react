import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li title="Currículo"><a href="#resume">Currículo</a></li>
                <li title="Portfólio"><a href="#portfolio">Portfólio</a></li>
                <li title="Contato"><a href="#contact">Contato</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;