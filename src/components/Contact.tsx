import { useState, type FormEvent } from 'react';
import { Mail, Send, ShieldCheck, Linkedin, Phone } from 'lucide-react';
import { Translation } from '../types';

interface ContactProps {
  t: (key: keyof Translation) => string;
  language: 'en' | 'es';
}

const API_BASE = '/api';

export default function Contact({ t, language }: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !text) return;

    setIsSending(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: subject || (language === 'en' ? 'General Inquiry' : 'Consulta General'),
          text,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'send failed');
      }

      setName('');
      setEmail('');
      setSubject('');
      setText('');
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch {
      setError(
        language === 'en'
          ? 'Could not send the message. Please try again or email me directly.'
          : 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme directamente por email.'
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white overflow-hidden border-t border-slate-900"
    >
      <div className="absolute top-2/3 left-10 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] bg-cyan-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full space-y-10 sm:space-y-12 z-10 relative">
        <div className="text-center space-y-3">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
            {language === 'en' ? 'GET IN TOUCH' : 'CONTACTO'}
          </p>
          <h2
            id="contact-header"
            className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold tracking-tight text-white"
          >
            {t('contactTitle')}
          </h2>
          <p className="text-slate-400 font-sans max-w-xl mx-auto text-sm md:text-base px-2">
            {t('contactSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-stretch">
          <div
            id="contact-info-panel"
            className="bg-slate-900/40 border border-slate-900 p-5 sm:p-6 md:p-8 rounded-xl flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <span className="px-2.5 py-0.5 text-[9px] font-mono uppercase bg-cyan-950 text-cyan-400 border border-cyan-800/20 rounded-md w-fit">
                {language === 'en' ? 'Available' : 'Disponible'}
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-sans font-bold text-white tracking-wide">
                {language === 'en' ? 'Connect with José' : 'Conecta con José'}
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                {language === 'en'
                  ? 'Full Stack Developer available for new projects. Own vehicle and full availability across Spain.'
                  : 'Desarrollador Full Stack con disponibilidad total. Vehículo propio y disponible para proyectos en toda España.'}
              </p>
            </div>

            <div className="space-y-3 text-xs font-mono text-slate-300">
              <a
                href="mailto:pepemartos98@gmail.com"
                className="flex items-center gap-3 bg-slate-950/40 p-3 rounded-md border border-slate-900 min-w-0 hover:border-cyan-500/30 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="truncate font-sans">pepemartos98@gmail.com</span>
              </a>
              <a
                href="tel:+34645420279"
                className="flex items-center gap-3 bg-slate-950/40 p-3 rounded-md border border-slate-900 hover:border-cyan-500/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-sans">+34 645 42 02 79</span>
              </a>
              <a
                href="https://www.linkedin.com/in/josemartosromero"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-slate-950/40 p-3 rounded-md border border-slate-900 hover:border-cyan-500/30 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate font-sans">linkedin.com/in/josemartosromero</span>
              </a>
              <div className="p-3 rounded-md border border-slate-900/60 bg-slate-950/20 text-slate-400 leading-relaxed font-sans text-xs">
                {t('bilingualBonus')}
              </div>
            </div>
          </div>

          <form
            id="contact-form"
            onSubmit={handleFormSubmit}
            className="bg-slate-900/20 border border-slate-900/60 p-5 sm:p-6 md:p-8 rounded-xl flex flex-col gap-4"
          >
            <div className="flex flex-col space-y-1.5 text-left">
              <label htmlFor="form-name" className="text-xs text-slate-400 font-mono tracking-wider font-semibold uppercase">
                {t('contactName')} <span className="text-cyan-500">*</span>
              </label>
              <input
                id="form-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={language === 'en' ? 'Your name' : 'Tu nombre'}
                className="bg-slate-950/85 border border-slate-800 focus:border-cyan-500/50 rounded-lg px-4 py-2.5 text-base sm:text-sm text-slate-200 placeholder:text-slate-600 outline-none transition-all w-full font-sans"
              />
            </div>

            <div className="flex flex-col space-y-1.5 text-left">
              <label htmlFor="form-email" className="text-xs text-slate-400 font-mono tracking-wider font-semibold uppercase">
                {t('contactEmail')} <span className="text-cyan-500">*</span>
              </label>
              <input
                id="form-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="bg-slate-950/85 border border-slate-800 focus:border-cyan-500/50 rounded-lg px-4 py-2.5 text-base sm:text-sm text-slate-200 placeholder:text-slate-600 outline-none transition-all w-full font-sans"
              />
            </div>

            <div className="flex flex-col space-y-1.5 text-left">
              <label htmlFor="form-subject" className="text-xs text-slate-400 font-mono tracking-wider font-semibold uppercase">
                {t('contactSubject')}
              </label>
              <input
                id="form-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder={language === 'en' ? 'Project proposal' : 'Propuesta de proyecto'}
                className="bg-slate-950/85 border border-slate-800 focus:border-cyan-500/50 rounded-lg px-4 py-2.5 text-base sm:text-sm text-slate-200 placeholder:text-slate-600 outline-none transition-all w-full font-sans"
              />
            </div>

            <div className="flex flex-col space-y-1.5 text-left">
              <label htmlFor="form-text" className="text-xs text-slate-400 font-mono tracking-wider font-semibold uppercase">
                {t('contactMessage')} <span className="text-cyan-500">*</span>
              </label>
              <textarea
                id="form-text"
                required
                rows={4}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={language === 'en' ? 'Tell me about your project...' : 'Cuéntame sobre tu proyecto...'}
                className="bg-slate-950/85 border border-slate-800 focus:border-cyan-500/50 rounded-lg px-4 py-2.5 text-base sm:text-sm text-slate-200 placeholder:text-slate-600 outline-none transition-all w-full resize-none font-sans"
              />
            </div>

            <button
              id="form-submit-btn"
              type="submit"
              disabled={isSending}
              className={`w-full py-3 px-6 rounded-lg font-semibold tracking-wide flex items-center justify-center gap-2 transition-all select-none duration-300 transform active:scale-97 text-black ${
                isSending
                  ? 'bg-slate-800 border-slate-700 text-slate-500 cursor-not-allowed'
                  : 'bg-cyan-400 hover:bg-cyan-300 border border-cyan-400/20 shadow-[0_0_12px_rgba(34,211,238,0.25)]'
              }`}
            >
              {isSending ? (
                <span>{t('sendingBtn')}</span>
              ) : (
                <>
                  <span>{t('sendBtn')}</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>

            {showSuccess && (
              <div
                id="form-success-banner"
                className="text-center p-3 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-sans leading-relaxed animate-fade-in"
              >
                {t('successMsg')}
              </div>
            )}

            {error && (
              <p className="text-amber-400/90 text-xs text-center leading-relaxed">{error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
