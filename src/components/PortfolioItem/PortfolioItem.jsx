import './PortfolioItem.css';

const PortfolioItem = (props) => {
    return (
        <div className='portfolio-item'>
            <a 
            href={props.link}
            alt={props.alt}
            target="_blank" 
            rel="noreferrer">
                <img src={props.image} alt="Formulário Gamer" />
                <h3>{props.title}</h3>
                <hr />
            </a>
        </div>  
    )
};

export default PortfolioItem;