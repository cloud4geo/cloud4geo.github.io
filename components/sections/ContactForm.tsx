'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Loader2, Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // We need to define schema inside component to use translations, 
  // or pass t to a schema creator function. For simplicity here:
  const formSchema = z.object({
    name: z.string().min(2, t('form.errors.name')),
    email: z.string().email(t('form.errors.email')),
    company: z.string().min(2, t('form.errors.company')),
    project: z.string().min(5, t('form.errors.project')),
    message: z.string().min(10, t('form.errors.message')),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-24">
          <div>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">{t('title')}</h2>
            <p className="mb-8 text-xl text-slate-400">
              {t('description')}
            </p>
            
            <div className="space-y-6 text-slate-300">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">{t('directEmail')}</p>
                  <p>contacto@cloud4geo.com</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-400">{t('form.name')}</label>
                  <input
                    {...register('name')}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder={t('form.placeholders.name')}
                  />
                  {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-400">{t('form.email')}</label>
                  <input
                    {...register('email')}
                    className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    placeholder={t('form.placeholders.email')}
                  />
                  {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-slate-400">{t('form.company')}</label>
                <input
                  {...register('company')}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder={t('form.placeholders.company')}
                />
                {errors.company && <p className="text-sm text-red-400">{errors.company.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-medium text-slate-400">{t('form.project')}</label>
                <input
                  {...register('project')}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder={t('form.placeholders.project')}
                />
                {errors.project && <p className="text-sm text-red-400">{errors.project.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-400">{t('form.message')}</label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder={t('form.placeholders.message')}
                />
                {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    {t('sending')}
                  </>
                ) : (
                  t('send')
                )}
              </button>
              
              {isSuccess && (
                <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center text-green-400">
                  {t('success')}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
