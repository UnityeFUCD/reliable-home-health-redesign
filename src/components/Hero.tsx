"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-[72px]" aria-label="Hero">
      <div className="relative overflow-hidden" style={{ backgroundColor: "#f0f0ee" }}>
        {/* Photo: positioned right, takes ~60% on desktop */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[58%]">
          <img
            src="https://ext.same-assets.com/3731215526/819752298.jpeg"
            alt="Caregiver with senior patient in a comfortable home setting"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile photo: stacked below card */}
        <div className="lg:hidden w-full aspect-[16/10] relative">
          <img
            src="https://ext.same-assets.com/3731215526/819752298.jpeg"
            alt="Caregiver with senior patient in a comfortable home setting"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card area */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="lg:min-h-[540px] xl:min-h-[580px] flex items-center py-10 lg:py-16">
            <div className="w-full max-w-[480px] lg:max-w-[500px]">
              <div
                className="bg-white rounded-[20px] px-8 py-9 sm:px-10 sm:py-10"
                style={{
                  boxShadow: "0 1px 16px rgb(0 0 0 / 0.04)",
                }}
              >
                <h1 className="text-[1.85rem] sm:text-[2.15rem] lg:text-[2.6rem] font-bold leading-[1.18] tracking-[-0.01em] text-[#1a1a1a] mb-5">
                  Independence
                  <br />
                  Through Patient-
                  <br />
                  Centered Care
                </h1>
                <p className="text-[14.5px] sm:text-[15px] leading-[1.75] text-[#5c5c5c] mb-8">
                  Reliable Home Healthcare, Inc. in Aurora, CO, provides
                  home health care services centered on each patient&apos;s
                  needs, ensuring consistent support that promotes
                  independence.
                </p>
                <Button
                  className="rounded-full bg-[hsl(var(--brand-teal))] hover:bg-[hsl(var(--brand-teal-hover))] text-white font-semibold px-7 h-[44px] text-[15px] transition-colors"
                  asChild
                >
                  <Link href="#about">
                    Find Out More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
