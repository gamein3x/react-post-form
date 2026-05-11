import { useState } from 'react'

function Form() {
    // Stato iniziale del form
    const initialForm = {
        author: '',
        title: '',
        body: '',
        public: false
    };

    const [formData, setFormData] = useState(initialForm);

    // Gestore universale per gli input
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    // Funzione per l'invio dei dati
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Dati inviati con successo:', data);
                alert('Post creato! Controlla la console.');
                setFormData(initialForm); // Reset del form
            })
            .catch(err => console.error('Errore:', err));
    };

    return (
        <div className="container">
            <h1>Crea Nuovo Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Autore:</label>
                    <input
                        type="text" name="author"
                        value={formData.author} onChange={handleChange} required
                    />
                </div>

                <div className="field">
                    <label>Titolo:</label>
                    <input
                        type="text" name="title"
                        value={formData.title} onChange={handleChange} required
                    />
                </div>

                <div className="field">
                    <label>Contenuto:</label>
                    <textarea
                        name="body"
                        value={formData.body} onChange={handleChange} required
                    />
                </div>

                <div className="field-checkbox">
                    <input
                        type="checkbox" name="public"
                        checked={formData.public} onChange={handleChange}
                    />
                    <label>Rendi pubblico</label>
                </div>

                <button type="submit">Invia Post</button>
            </form>
        </div>
    )
}

export default Form;