import './Resume.css';

import data from '../../index.json';

const Resume = () => {
    return (
        <main>
            <section id='resume'>
                <h2>Sobre mim</h2>
                <p>{data.briefing}</p>
                <h2>Acadêmico</h2>
                    <ul className="resume">
                        <li>
                            <b>({data.academicExperience[0].initialYear} - {data.academicExperience[0].finalYear})</b>{' '}
                            {data.academicExperience[0].title}
                        </li>
                    </ul>
                <h2>Profissional</h2>
                    <ul className="resume">
                        {data.professionalExperience.map((item, index) => (
                            <li key={index}>
                                <b>({item.initialDate} - {item.finalDate})</b>{' '}
                                {item.role} - {item.firm}
                            </li>
                        ))}
                    </ul>
            </section>
        </main>
    )
};

export default Resume;