"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 sm:py-28" style={{ backgroundColor: "#f9f9f7" }}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Info */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(174 52% 42%)" }}>
              Contact Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3">
              Drop Us a Line
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-10">
              Have questions or need assistance? Our friendly team is ready to listen and respond.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(174 52% 42% / 0.08)" }}>
                  <svg className="w-5 h-5" style={{ color: "hsl(174 52% 42%)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">Address</p>
                  <p className="text-[15px] font-semibold text-gray-900">2821 S Parker Rd, Building 2, Suite 411</p>
                  <p className="text-[14px] text-gray-500">Aurora, CO 80014</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(174 52% 42% / 0.08)" }}>
                  <svg className="w-5 h-5" style={{ color: "hsl(174 52% 42%)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">Phone</p>
                  <a href="tel:7206513007" className="text-[15px] font-semibold text-gray-900 hover:underline">720-651-3007</a>
                  <p className="text-[14px] text-gray-500">Fax: 303-285-4438</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "hsl(174 52% 42% / 0.08)" }}>
                  <svg className="w-5 h-5" style={{ color: "hsl(174 52% 42%)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] uppercase tracking-wider text-gray-400 font-medium mb-0.5">Email</p>
                  <a href="mailto:info@reliablehomehc.com" className="text-[15px] font-semibold text-gray-900 hover:underline">
                    info@reliablehomehc.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-[12px] uppercase tracking-wider text-gray-400 font-medium mb-3">Follow Us</p>
              <div className="flex items-center gap-3">
                {["facebook", "twitter", "instagram"].map((s) => (
                  <a
                    key={s}
                    href={`https://${s}.com`}
                    className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    aria-label={s}
                  >
                    {s === "facebook" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    )}
                    {s === "twitter" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    )}
                    {s === "instagram" && (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-gray-100" style={{ boxShadow: "0 1px 12px rgb(0 0 0 / 0.03)" }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                    Full Name <span style={{ color: "hsl(174 52% 42%)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 outline-none transition-all text-[14px]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                    Email <span style={{ color: "hsl(174 52% 42%)" }}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 outline-none transition-all text-[14px]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-[13px] font-medium text-gray-700 mb-1.5">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 outline-none transition-all text-[14px]"
                  placeholder="(720) 555-0100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[13px] font-medium text-gray-700 mb-1.5">
                  Message <span style={{ color: "hsl(174 52% 42%)" }}>*</span>
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:border-gray-400 focus:ring-1 focus:ring-gray-300 outline-none transition-all text-[14px] resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="consent"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="w-4 h-4 rounded border-gray-300 mt-0.5"
                />
                <label htmlFor="consent" className="text-[13px] text-gray-500 leading-relaxed">
                  I consent to the collection of my personal information in accordance with the{" "}
                  <a href="#" className="underline">Privacy Policy</a>.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full rounded-full font-semibold h-11 text-[14px] bg-gray-900 hover:bg-gray-800 text-white transition-colors"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
