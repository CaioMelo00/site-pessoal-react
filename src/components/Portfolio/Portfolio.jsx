import PortfolioItem from '../PortfolioItem';

import './Portfolio.css';
import portfolio from './Portfolio.json';

const Portfolio = () => {

    return (
        <main>
            <section id='portfolio'>
                <h2>Portfólio</h2>
                {portfolio.map(
                    (item, index) =>
                        <PortfolioItem
                        key={index}
                        link={item.link}
                        image={item.image}
                        title={item.title} // + (index + 1)
                        alt={item.alt}>
                        </PortfolioItem>               
                )}
            </section>
        </main>
    )
};

export default Portfolio;