import { useState } from 'react';

import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    function submitForm(event) {
        event.preventDefault();
        console.log('Formulário enviado')

        const text = `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nAssunto: ${subject}\nMensagem: ${message}`;
        const textEncoded = encodeURIComponent(text);
        const numberWhatsApp = import.meta.env.VITE_WHATSAPP_NUMBER; // variável de ambiente
        const linkWhatsapp = `https://wa.me/${numberWhatsApp}?text=${textEncoded}`;

        window.open(linkWhatsapp, '_blank');
    }

    function phoneMask(event) {
        const text = event.target.value;
        const onlyNumbersText = text.replace(/∖D/g, '').substring(0, 15);

        let formattedPhone = onlyNumbersText.replace(/^(∖d{2})(∖d{5})(∖d{4})/, '($1) $2-$3');

        if (onlyNumbersText.length < 11) {
            formattedPhone = onlyNumbersText.replace(/^(∖d{2})(∖d{5})(∖d{0,4})/, '($1) $2-$3');
        }

        setPhone(formattedPhone);
    }

    return (
        <footer id='contact' className='contact'>
            <div>
                <h2>Contato</h2>
                <form onSubmit={submitForm}>
                    <fieldset className='fieldset'>
                        <input 
                            id="input-name" 
                            className="answer" 
                            name="name" 
                            type="text" 
                            placeholder="Nome" 
                            minlenght="2"
                            value={name} 
                            onChange={(event) => setName(event.target.value)}
                            required 
                        />
                        <input 
                            id="input-email" 
                            className="answer" 
                            name="email" 
                            type="email" 
                            placeholder="Email"
                            value={email} 
                            onChange={(event) => setEmail(event.target.value)} 
                            required 
                        />
                        <input 
                            id="input-phone" 
                            className="answer" 
                            name="phone" 
                            type="tel" 
                            placeholder="Telefone"
                            // pattern="^∖(∖d{2}∖) ∖d{5}-∖d{4}$"
                            maxLength="15"
                            value={phone} 
                            onChange={phoneMask}
                            required 
                        />
                        <input 
                            id="input-subject" 
                            className="answer" 
                            name="subject" 
                            type="text" 
                            placeholder="Assunto" 
                            value={subject} 
                            onChange={(event) => setSubject(event.target.value)}
                            required 
                        />
                        <textarea 
                            id="input-message" 
                            className="answer" 
                            name="message" 
                            placeholder="Mensagem" 
                            cols="21" 
                            rows="5"
                            value={message} 
                            onChange={(event) => setMessage(event.target.value)}
                        >
                        </textarea>
                    </fieldset>
                    <button className="button" type="submit">Enviar</button>
                </form>
                <address className="address">
                    <a href="https://linkedin.com/in/caio-vinícius-a4ab74180" target='_blank' rel='noreferrer'><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/CaioMelo00" target='_blank' rel='noreferrer'><i className="fa fa-github"></i></a>
                </address>
                <p className="signature">Desenvolvido por Caio Vinícius</p>
            </div>
        </footer>
    )
};

export default Contact;