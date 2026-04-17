"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar, Footer } from "../components";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

type ContactFormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const contactEmail = "marco3072003@gmail.com";
const contactPhone = "+62 821-2367-0582";
const whatsappNumber = "6282123670582";
const USE_MAILTO_FALLBACK = true;

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  const sendViaApi = async () => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    });

    const result = (await response.json()) as { message?: string };

    if (!response.ok) {
      throw new Error(result.message || "Failed to send message.");
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setSubmitMessage(null);

    if (USE_MAILTO_FALLBACK) {
      const subject = encodeURIComponent(formState.subject || `New message from ${formState.name || "website visitor"}`);
      const body = encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`,
      );

      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      return;
    }

    setIsSubmitting(true);
    try {
      await sendViaApi();
      setSubmitMessage("Message sent successfully. I will get back to you soon.");
      setFormState(initialFormState);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <Navbar />

      <main className="flex-1 overflow-hidden pt-24 sm:pt-28">
        <section className="relative overflow-hidden border-b border-white/10 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute top-20 right-0 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                Contact
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s build something
                <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                  together
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Send me an email, give me a call, or drop a message through the form below.
                I&apos;ll get back to you as soon as possible.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <FiMail className="h-5 w-5 text-cyan-300" />
                  <p className="mt-3 text-sm font-medium text-slate-400">Email</p>
                  <Link href={`mailto:${contactEmail}`} className="mt-1 block text-sm font-medium leading-relaxed text-white wrap-break-word hover:text-cyan-300">
                    {contactEmail}
                  </Link>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <FiPhone className="h-5 w-5 text-orange-300" />
                  <p className="mt-3 text-sm font-medium text-slate-400">Phone</p>
                  <Link href={`tel:${contactPhone.replace(/[^+\d]/g, "")}`} className="mt-1 block text-sm font-semibold text-white hover:text-orange-300">
                    {contactPhone}
                  </Link>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:col-span-2">
                  <FiMapPin className="h-5 w-5 text-blue-300" />
                  <p className="mt-3 text-sm font-medium text-slate-400">Location</p>
                  <p className="mt-1 text-sm font-semibold text-white">Indonesia</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl sm:p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white">Send a message</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    Fill out the form and your email app will open with the message draft.
                  </p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project..."
                      className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-cyan-500 to-orange-400 px-5 py-3.5 font-semibold text-white transition hover:scale-[1.01] hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <FiSend className="h-4 w-4" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {submitMessage && (
                    <p className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200">
                      {submitMessage}
                    </p>
                  )}

                  {submitError && (
                    <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-3 py-2 text-sm text-red-200">
                      {submitError}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href={`mailto:${contactEmail}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Email me</p>
              <p className="mt-3 text-xl font-bold text-white group-hover:text-cyan-300">{contactEmail}</p>
              <p className="mt-2 text-sm text-slate-400">Best for project inquiries, collaboration, and general questions.</p>
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-orange-400/40 hover:bg-white/10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">Call or WhatsApp</p>
              <p className="mt-3 text-xl font-bold text-white group-hover:text-orange-300">{contactPhone}</p>
              <p className="mt-2 text-sm text-slate-400">Quick response for direct communication and urgent discussions.</p>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
