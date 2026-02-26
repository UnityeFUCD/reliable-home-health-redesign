"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  {
    title: "Skilled Nursing",
    description: "Essential medical care including wound care, medication management, and health monitoring.",
    tag: "Medical Care",
  },
  {
    title: "Physical Therapy",
    description: "Therapy programs designed to restore strength, mobility, and physical function.",
    tag: "Rehabilitation",
  },
  {
    title: "Speech Therapy",
    description: "Specialized therapy to improve communication abilities and swallowing functions.",
    tag: "Communication",
  },
  {
    title: "Home Health Aide",
    description: "Personal care and household assistance to help patients maintain comfort and dignity.",
    tag: "Personal Care",
  },
  {
    title: "Occupational Therapy",
    description: "Helping patients relearn daily activities and adapt their environment for independence.",
    tag: "Independence",
  },
  {
    title: "Medical Social Work",
    description: "Counseling and resources to help patients and families navigate healthcare systems.",
    tag: "Support",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28" style={{ backgroundColor: "#f9f9f7" }}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-[13px] font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(174 52% 42%)" }}>
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Comprehensive Home Health Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            From skilled nursing to therapy and home assistance, we deliver reliable healthcare
            solutions that allow patients to remain engaged and independent.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <span
                className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider rounded-full mb-5"
                style={{
                  backgroundColor: "hsl(174 52% 42% / 0.08)",
                  color: "hsl(174 52% 42%)",
                }}
              >
                {service.tag}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button
            className="rounded-full text-white font-semibold px-7 h-11 text-[14px] transition-colors"
            style={{ backgroundColor: "hsl(174 52% 42%)" }}
            asChild
          >
            <Link href="#contact">
              View All Services
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
