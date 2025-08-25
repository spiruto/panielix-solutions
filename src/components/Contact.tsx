"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactSchema = z.object({
  fullName: z
    .string({ error: "Your name is required."})
    .min(2, "Please enter your full name."),
  email: z
    .string({ error: "Email is required." })
    .email("Please enter a valid email."),
  website: z
    .string()
    .trim()
    .optional()
    .transform((v) => (v ? v : undefined)),
  inquiry: z
    .string({ error: "Tell us about your project." })
    .min(20, "Give us at least 20 characters so we can help."),
  // simple honeypot (should remain empty)
  company: z.string().optional(),
});

type ContactInput = z.infer<typeof ContactSchema>;

export default function Contact() {
  const [serverMsg, setServerMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      website: "",
      inquiry: ""
    }
  });

  async function sendContactForm(values: ContactInput) {
    setServerMsg(null);

    // Honeypot check
    if (values.company && values.company.length > 0) {
      // likely a bot — pretend success without touching backend
      setServerMsg({ type: "success", text: "Thanks! We’ll be in touch shortly." });
      reset();
      return;
    }

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        // Same-origin request only (pairs with your domain-only protection)
        credentials: "same-origin",
        body: JSON.stringify({
          fullName: values.fullName,
          email: values.email,
          inquiry: values.inquiry,
          website: values.website
        })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const message = (data && (data.error || data.message)) || "Something went wrong.";
        throw new Error(message);
      }

      setServerMsg({ type: "success", text: "Thanks! Your message has been sent." });
      reset();
    } catch (err: unknown) {
      setServerMsg({
        type: "error",
        text: (err as Error)?.message || "We couldn’t submit the form. Please try again."
      });
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Grow Your Business?</h2>
          <p className="mt-4 text-lg text-[var(--slate-400)]">
            Let&apos;s build a website that gets you results. Fill out the form for a free, no-obligation proposal.
          </p>
        </div>

        {/* Feedback banner */}
        {serverMsg && (
          <div
            className={`mt-8 rounded-lg border px-4 py-3 text-sm ${serverMsg.type === "success"
                ? "border-green-600/30 bg-green-500/10 text-green-300"
                : "border-red-600/30 bg-red-500/10 text-red-300"
              }`}
          >
            {serverMsg.text}
          </div>
        )}

        <form onSubmit={handleSubmit(sendContactForm)} className="mt-12" noValidate>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-white">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your Name"
                  autoComplete="name"
                  {...register("fullName")}
                  aria-invalid={!!errors.fullName}
                  className={`block w-full rounded-md border-transparent bg-[var(--slate-800)] px-4 py-3 text-white shadow-sm focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)] ${errors.fullName ? "ring-1 ring-red-500" : ""
                    }`}
                />
              </div>
              {errors.fullName && <p className="mt-2 text-sm text-red-400">{errors.fullName.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  autoComplete="email"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                  className={`block w-full rounded-md border-transparent bg-[var(--slate-800)] px-4 py-3 text-white shadow-sm focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)] ${errors.email ? "ring-1 ring-red-500" : ""
                    }`}
                />
              </div>
              {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
            </div>

            {/* Website (optional) */}
            <div className="sm:col-span-2">
              <label htmlFor="website" className="block text-sm font-medium text-white">
                Company Website (Optional)
              </label>
              <div className="mt-1">
                <input
                  id="website"
                  type="url"
                  placeholder="https://www.yourcompany.com"
                  {...register("website")}
                  aria-invalid={!!errors.website}
                  className={`block w-full rounded-md border-transparent bg-[var(--slate-800)] px-4 py-3 text-white shadow-sm focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)] ${errors.website ? "ring-1 ring-red-500" : ""
                    }`}
                />
              </div>
              {errors.website && <p className="mt-2 text-sm text-red-400">{errors.website.message as string}</p>}
            </div>

            {/* Inquiry */}
            <div className="sm:col-span-2">
              <label htmlFor="inquiry" className="block text-sm font-medium text-white">
                Tell us about your project <span className="text-red-500">*</span>
              </label>
              <div className="mt-1">
                <textarea
                  id="inquiry"
                  rows={4}
                  placeholder="What are your business goals? Who is your target audience? Any sites you like?"
                  {...register("inquiry")}
                  aria-invalid={!!errors.inquiry}
                  className={`block w-full rounded-md border-transparent bg-[var(--slate-800)] px-4 py-3 text-white shadow-sm focus:border-[var(--primary-500)] focus:ring-[var(--primary-500)] ${errors.inquiry ? "ring-1 ring-red-500" : ""
                    }`}
                />
              </div>
              {errors.inquiry && <p className="mt-2 text-sm text-red-400">{errors.inquiry.message}</p>}
            </div>

            {/* Honeypot (hidden) */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register("company")}
              className="hidden"
              aria-hidden="true"
            />

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[var(--primary-500)] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[var(--primary-600)] focus:outline-none focus:ring-2 focus:ring-[var(--primary-500)] focus:ring-offset-2 focus:ring-offset-[var(--slate-950)] disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Information"}
              </button>
              <p className="mt-2 text-center text-xs text-[var(--slate-400)]">
                By submitting, you agree to be contacted about your inquiry.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
