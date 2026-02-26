"use client";

import Link from "next/link";

const resources = [
  {
    title: "Patient Rights & Responsibilities",
    description: "Understanding your rights as a patient and what we expect from our partnership.",
  },
  {
    title: "HIPAA Privacy Practices",
    description: "Learn how we protect your personal health information with strict confidentiality.",
  },
  {
    title: "Emergency Preparedness",
    description: "Our comprehensive plan to ensure continuous care during emergencies.",
  },
  {
    title: "Patient Satisfaction Survey",
    description: "Share your feedback to help us continuously improve our services.",
  },
];

export function Resources() {
  return (
    <section id="resources" className="py-20 sm:py-28" style={{ backgroundColor: "#f9f9f7" }} aria-labelledby="resources-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(174 52% 42%)" }}>
              Resources
            </p>
            <h2 id="resources-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Helpful Resources & Information
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Access important information about your care, rights, and how we maintain
              the highest standards of service and privacy.
            </p>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Need Assistance?</h4>
              <p className="text-[14px] text-gray-500 mb-3">Our team is available to help with any questions about our services.</p>
              <a
                href="tel:7206513007"
                className="inline-flex items-center gap-2 text-[14px] font-semibold"
                style={{ color: "hsl(174 52% 42%)" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call 720-651-3007
              </a>
            </div>
          </div>

          {/* Right: resource cards */}
          <div className="space-y-3">
            {resources.map((resource, i) => (
              <Link
                key={resource.title}
                href="#"
                className="group flex items-center gap-5 bg-white rounded-xl p-5 border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[14px] font-bold shrink-0"
                  style={{ backgroundColor: "hsl(174 52% 42% / 0.08)", color: "hsl(174 52% 42%)" }}
                >
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[15px] font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">{resource.title}</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed mt-0.5">{resource.description}</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500 shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
