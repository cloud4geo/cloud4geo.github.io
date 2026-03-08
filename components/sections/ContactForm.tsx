'use client';

import React from 'react';
import { Mail, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const formRef = React.useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_c59ak5q',
        'template_os0ucvq',
        e.currentTarget,
        '8gcXTWpg5UPKbA483'
      );
      setStatus('success');
      formRef.current?.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">{t('title')}</h2>
            <p className="text-xl text-slate-400">{t('description')}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="md:col-span-3 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    minLength={2}
                    placeholder={t('form.placeholders.name')}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t('form.placeholders.email')}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    placeholder={t('form.placeholders.company')}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('form.project')}
                  </label>
                  <input
                    type="text"
                    id="project"
                    name="project"
                    required
                    placeholder={t('form.placeholders.project')}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                  {t('form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  placeholder={t('form.placeholders.message')}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  t('sending')
                ) : (
                  <>
                    {t('send')}
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center font-medium">{t('success')}</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center font-medium">Something went wrong. Please try again.</p>
              )}
            </form>

            {/* Sidebar */}
            <div className="md:col-span-2 space-y-6">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t('directEmail')}</p>
                    <a
                      href="mailto:info@cloud4geo.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      info@cloud4geo.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <p className="text-sm text-slate-400 leading-relaxed">
                  Lima, Peru &middot; Serving clients globally
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
