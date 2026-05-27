import { useState } from 'react'
import './Contact.css'

type FormState = 'idle' | 'loading' | 'success' | 'error'

const channels = [
  { icon: '📧', label: 'E-mail', value: 'smartsolver@gmail.com' },
  { icon: '📍', label: 'Endereço', value: 'São Paulo, SP — Brasil' },
]

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle')
  const [serverError, setServerError] = useState('')
  const [sentName, setSentName] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })

  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const validate = () => {
    const e: Partial<typeof form> = {}

    if (!form.name.trim()) {
      e.name = 'Nome é obrigatório'
    }

    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      e.email = 'E-mail inválido'
    }

    if (!form.message.trim()) {
      e.message = 'Mensagem é obrigatória'
    }

    setErrors(e)

    return Object.keys(e).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setForm(prev => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name as keyof typeof form]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }))
    }

    if (formState === 'error') {
      setFormState('idle')
    }
  }

  // ENVIO APENAS VISUAL
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) return

    setFormState('loading')
    setServerError('')

    // Simula tempo de envio
    await new Promise(resolve => setTimeout(resolve, 1800))

    setSentName(form.name)

    setForm({
      name: '',
      email: '',
      company: '',
      message: '',
    })

    setFormState('success')
  }

  const handleReset = () => {
    setFormState('idle')
    setServerError('')
    setErrors({})
  }

  return (
    <div className="contact">
      {/* Header */}
      <section className="contact-hero">
        <div className="contact-hero__orb" />

        <div className="container contact-hero__inner">
          <p className="section-label fade-up fade-up-1">
            Entre em contato
          </p>

          <h1 className="contact-hero__title fade-up fade-up-2">
            Vamos resolver juntos?
          </h1>

          <div className="glow-line" />

          <p className="contact-hero__desc fade-up fade-up-3">
            Nossa equipe está pronta para entender seu desafio e mostrar
            como o smartSolver pode transformar a gestão de reclamações
            da sua empresa.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* Info */}
          <div className="contact-info">
            <h2 className="contact-info__title">
              Fale com a gente
            </h2>

            <p className="contact-info__text">
              Responderemos em até 24 horas. Para atendimento urgente,
              entre em contato diretamente pelo e-mail abaixo.
            </p>

            <div className="contact-channels">
              {channels.map((c, i) => (
                <div key={i} className="channel-item">
                  <span className="channel-item__icon">
                    {c.icon}
                  </span>

                  <div>
                    <p className="channel-item__label">
                      {c.label}
                    </p>

                    <p className="channel-item__value">
                      {c.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-badge">
              <div className="contact-badge__dot" />
              <span>
                Normalmente respondemos em menos de 4 horas
              </span>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {formState === 'success' ? (
              <div className="form-success">
                <div className="form-success__icon">
                  ✅
                </div>

                <h3 className="form-success__title">
                  Mensagem enviada!
                </h3>

                <p className="form-success__text">
                  Recebemos seu contato,{' '}
                  <strong>{sentName}</strong>!
                  Nossa equipe entrará em contato em breve.
                </p>

                <button
                  className="btn-outline"
                  onClick={handleReset}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                noValidate
              >
                <h3 className="contact-form__title">
                  Envie sua mensagem
                </h3>

                {formState === 'error' && serverError && (
                  <div className="form-server-error">
                    <span>⚠️</span> {serverError}
                  </div>
                )}

                <div className="form-row">

                  {/* Nome */}
                  <div
                    className={`form-group ${
                      errors.name ? 'form-group--error' : ''
                    }`}
                  >
                    <label className="form-label">
                      Nome *
                    </label>

                    <input
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="Seu nome completo"
                      value={form.name}
                      onChange={handleChange}
                      disabled={formState === 'loading'}
                    />

                    {errors.name && (
                      <span className="form-error">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div
                    className={`form-group ${
                      errors.email ? 'form-group--error' : ''
                    }`}
                  >
                    <label className="form-label">
                      E-mail *
                    </label>

                    <input
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      disabled={formState === 'loading'}
                    />

                    {errors.email && (
                      <span className="form-error">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Empresa */}
                <div className="form-group">
                  <label className="form-label">
                    Empresa
                  </label>

                  <input
                    className="form-input"
                    type="text"
                    name="company"
                    placeholder="Nome da sua empresa (opcional)"
                    value={form.company}
                    onChange={handleChange}
                    disabled={formState === 'loading'}
                  />
                </div>

                {/* Mensagem */}
                <div
                  className={`form-group ${
                    errors.message ? 'form-group--error' : ''
                  }`}
                >
                  <label className="form-label">
                    Mensagem *
                  </label>

                  <textarea
                    className="form-input form-textarea"
                    name="message"
                    placeholder="Descreva seu desafio ou dúvida..."
                    value={form.message}
                    onChange={handleChange}
                    disabled={formState === 'loading'}
                    rows={5}
                  />

                  {errors.message && (
                    <span className="form-error">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`btn-primary form-submit ${
                    formState === 'loading'
                      ? 'form-submit--loading'
                      : ''
                  }`}
                  disabled={formState === 'loading'}
                >
                  {formState === 'loading' ? (
                    <>
                      <span className="form-spinner" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span>Enviar mensagem</span>

                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2 8l10 0M8 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}