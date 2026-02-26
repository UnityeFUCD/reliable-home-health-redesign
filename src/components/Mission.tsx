"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  { number: "100%", label: "Patient Satisfaction Focus", description: "Prioritizing well-being and satisfaction of every patient" },
  { number: "24/7", label: "Support Available", description: "Round-the-clock care coordination for peace of mind" },
  { number: "9", label: "Counties Served", description: "Covering Adams, Arapahoe, Denver, Douglas and more" },
  { number: "CHAP", label: "Fully Accredited", description: "Meeting the highest standards of quality care" },
];

export function Mission() {
  return (
    <section className="py-20 sm:py-28 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(174 52% 52%)" }}>
              Our Mission
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-6">
              Compassionate Care That Promotes Independence
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              To deliver compassionate, high-quality home health care that enhances
              the lives of our patients, promotes independence, and supports their loved ones.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                className="rounded-full text-white font-semibold px-6 h-11 text-[14px] transition-colors"
                style={{ backgroundColor: "hsl(174 52% 42%)" }}
                asChild
              >
                <Link href="#about">About Us</Link>
              </Button>
              <Button
                variant="outline"
                className="rounded-full font-semibold px-6 h-11 text-[14px] border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                asChild
              >
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-gray-800/60 rounded-2xl p-6 border border-gray-700/50">
                <p className="text-3xl font-bold mb-1" style={{ color: "hsl(174 52% 52%)" }}>{stat.number}</p>
                <p className="text-[15px] font-semibold text-white mb-1.5">{stat.label}</p>
                <p className="text-[13px] text-gray-400 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
