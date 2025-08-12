'use client';

import { useState } from 'react';
import './contact.css';

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        objective: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('✅ Mensagem enviada com sucesso!');
                setForm({ name: '', email: '', phone: '', objective: '', message: '' });
            } else {
                setStatus(`❌ Erro: ${data.error || 'Não foi possível enviar.'}`);
            }
        } catch {
            setStatus('❌ Erro ao enviar mensagem.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-section" id='contact'>
            <div className="container contact-wrapper">
                <div className="contact-text">
                    <h2>
                        <span>Ficou com alguma dúvida ou gostaria de agendar um horário?</span>
                    </h2>
                    <p>
                        Sinta-se a vontade para me mandar um email ou entrar em contato pelo whatsapp no link a seguir! 
                        <a href="https://w.app/ellen-santos-machado">Enviar mensagem no Whatsapp →</a>
                    </p>
                    <p>
                        Pode ter certeza que tirarei um tempo para escutar sua história e entender os pontos que você me trouxer!
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <h3>Vamos agendar uma conversa para que possamos nos conhecer melhor?</h3>
                    <div className="form-grid">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nome*" 
                            value={form.name} 
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Seu melhor email*" 
                            value={form.email} 
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Número de telefone (WhatsApp)" 
                            value={form.phone} 
                            onChange={handleChange} 
                        />
                        <select 
                            name="objective" 
                            value={form.objective} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="" disabled>Qual o seu objetivo com a terapia?*</option>
                            <option>Me conhecer melhor</option>
                            <option>Problemas com ansiedade</option>
                            <option>Problemas familiares</option>
                            <option>Dificuldade em lidar com o trabalho</option>
                            <option>Outros...</option>
                        </select>
                        <textarea 
                            name="message" 
                            placeholder="Quer me enviar uma prévia do que gostaria de tratar em sessão? Fique a vontade para me contar!" 
                            value={form.message} 
                            onChange={handleChange} 
                        />
                    </div>
                    {status && <p className="form-disclaimer">{status}</p>}
                    <button className="btn-pink" type="submit" disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar Email'}
                    </button>
                </form>
            </div>
        </section>
    )
}
