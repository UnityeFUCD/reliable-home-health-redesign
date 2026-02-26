"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const positions = [
  { title: "Registered Nurse (RN)", type: "Full-time", location: "Aurora, CO" },
  { title: "Physical Therapist", type: "Full-time", location: "Denver, CO" },
  { title: "Home Health Aide", type: "Part-time", location: "Multiple Locations" },
  { title: "Speech-Language Pathologist", type: "Full-time", location: "Aurora, CO" },
];

export function Careers() {
  return (
    <section id="careers" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(174 52% 42%)" }}>
              Careers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Join Our Healthcare Team
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Make a difference in people&apos;s lives every day. We&apos;re looking for compassionate
              healthcare professionals to join our growing team.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { label: "Health Benefits", desc: "Comprehensive coverage" },
                { label: "Flexible Schedule", desc: "Work-life balance" },
                { label: "Growth Opportunities", desc: "Career advancement" },
                { label: "Supportive Team", desc: "Collaborative culture" },
              ].map((benefit) => (
                <div key={benefit.label} className="flex items-center gap-3 p-3.5 rounded-xl" style={{ backgroundColor: "#f9f9f7" }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "hsl(174 52% 42%)" }} />
                  <div>
                    <p className="text-[14px] font-semibold text-gray-900">{benefit.label}</p>
                    <p className="text-[12px] text-gray-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="rounded-full font-semibold px-7 h-11 text-[14px] bg-gray-900 hover:bg-gray-800 text-white transition-colors"
              asChild
            >
              <Link href="#contact">Apply Now</Link>
            </Button>
          </div>

          {/* Right: positions */}
          <div className="bg-gray-900 rounded-2xl p-7">
            <h3 className="text-xl font-bold text-white mb-5">Open Positions</h3>
            <div className="space-y-3">
              {positions.map((pos) => (
                <div key={pos.title} className="bg-gray-800/80 rounded-xl p-4 border border-gray-700/50 hover:border-gray-600 transition-colors cursor-pointer group">
                  <h4 className="text-[15px] font-semibold text-white mb-1.5">{pos.title}</h4>
                  <div className="flex items-center gap-3 text-[12px] text-gray-400">
                    <span>{pos.type}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-600" />
                    <span>{pos.location}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-gray-700/50">
              <p className="text-[13px] text-gray-400 mb-3">
                Don&apos;t see a fit? Send us your resume anyway.
              </p>
              <Button
                variant="outline"
                className="w-full rounded-full font-semibold h-10 text-[14px] border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                asChild
              >
                <Link href="mailto:info@reliablehomehc.com">Submit Your Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
