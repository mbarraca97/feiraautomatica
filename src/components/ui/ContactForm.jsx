import { useState } from 'react';
import Button from './Button';
import { contact } from '../../data/site';

const inputClassName =
  'w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-base text-foreground outline-none transition-colors placeholder:text-muted focus:border-foreground';

const labelClassName = 'mb-2 block font-body text-sm font-medium text-foreground';

export default function ContactForm({ formCopy }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
          _subject: 'Pedido de Orçamento - Feira Automática',
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus('success');
      setFormState({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage(formCopy.errorMessage);
    }
  };

  if (status === 'success') {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[1.25rem] bg-background px-6 py-10 text-center tablet:rounded-[1.5rem] tablet:px-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-subtle">
          <svg
            className="h-7 w-7 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-foreground">
          {formCopy.successMessage}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[1.25rem] bg-background p-6 tablet:rounded-[1.5rem] tablet:p-8 desktop:p-10"
    >
      <h3 className="font-display text-heading-md font-medium text-foreground">
        {formCopy.formTitle}
      </h3>

      <div className="mt-6 grid gap-5 tablet:grid-cols-2">
        <div className="tablet:col-span-1">
          <label htmlFor="contact-name" className={labelClassName}>
            Nome
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={formState.name}
            onChange={handleChange}
            className={inputClassName}
            placeholder="O seu nome"
          />
        </div>

        <div className="tablet:col-span-1">
          <label htmlFor="contact-email" className={labelClassName}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={formState.email}
            onChange={handleChange}
            className={inputClassName}
            placeholder="nome@email.com"
          />
        </div>

        <div className="tablet:col-span-2">
          <label htmlFor="contact-phone" className={labelClassName}>
            Telefone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formState.phone}
            onChange={handleChange}
            className={inputClassName}
            placeholder="Opcional"
          />
        </div>

        <div className="tablet:col-span-2">
          <label htmlFor="contact-message" className={labelClassName}>
            Mensagem
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={formState.message}
            onChange={handleChange}
            className={`${inputClassName} resize-y min-h-[140px]`}
            placeholder="Descreva o que precisa ou o tipo de instalação"
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-4 font-body text-sm text-accent" role="alert">
          {errorMessage}
        </p>
      )}

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="w-full tablet:w-auto"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'A enviar…' : formCopy.submitLabel}
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </Button>
      </div>
    </form>
  );
}
