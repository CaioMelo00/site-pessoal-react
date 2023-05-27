import './Header.css';

import caioAvatar from '../../assets/minha-foto.jpg';

const Header = () => {
    return (
        <header>
            <img src={caioAvatar} alt="Minha foto" />
            <h1>Caio<br />
                Vinícius<br /> 
                de<br /> 
                Melo
            </h1>
        </header>
    )
}

export default Header;