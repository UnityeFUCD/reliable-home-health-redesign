"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Features() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-5">
          {/* Set Appointment */}
          <div className="rounded-2xl p-7 border border-gray-100" style={{ backgroundColor: "#f8faf9" }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "hsl(174 52% 42%)" }}>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Set an Appointment</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
              Schedule your care with ease and convenience. Our team is ready to help you or your loved ones.
            </p>
            <Button
              className="w-full rounded-full text-white font-semibold h-10 text-[14px] transition-colors"
              style={{ backgroundColor: "hsl(174 52% 42%)" }}
              asChild
            >
              <Link href="#contact">Schedule Now</Link>
            </Button>
          </div>

          {/* Insurance */}
          <div className="rounded-2xl p-7 border border-gray-100" style={{ backgroundColor: "#f8faf9" }}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "hsl(174 52% 42%)" }}>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Insurance Accepted</h3>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
              We work with most major insurance companies, including Medicare and Medicaid.
            </p>
            <Button
              variant="outline"
              className="w-full rounded-full font-semibold h-10 text-[14px] border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              asChild
            >
              <Link href="#contact">Learn More</Link>
            </Button>
          </div>

          {/* Referrals */}
          <div className="rounded-2xl p-7 bg-gray-900 text-white">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "hsl(174 52% 42%)" }}>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Send Your Referrals</h3>
            <p className="text-[14px] text-gray-400 leading-relaxed mb-6">
              Healthcare providers can easily refer patients. We make the process seamless.
            </p>
            <Button
              className="w-full rounded-full text-gray-900 font-semibold h-10 text-[14px] transition-colors"
              style={{ backgroundColor: "hsl(174 52% 52%)" }}
              asChild
            >
              <Link href="#contact">Send Referral</Link>
            </Button>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-12 rounded-2xl p-8 sm:p-10 border border-gray-100" style={{ backgroundColor: "#f9f9f7" }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-widest mb-2" style={{ color: "hsl(174 52% 42%)" }}>
                Service Coverage
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Serving Colorado Communities</h3>
              <p className="text-[15px] text-gray-500 max-w-lg">
                We provide home health services across the region, bringing quality care directly to your home.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Adams", "Arapahoe", "Denver", "Douglas", "Elbert", "Jefferson", "Larimer", "Morgan", "Washington"].map((county) => (
                <span
                  key={county}
                  className="px-3.5 py-1.5 bg-white rounded-full text-[13px] font-medium text-gray-600 border border-gray-200"
                >
                  {county}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
