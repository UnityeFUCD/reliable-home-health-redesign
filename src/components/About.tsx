"use client";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-widest mb-4" style={{ color: "hsl(174 52% 42%)" }}>
              About Us
            </p>
            <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-6">
              Skilled and Compassionate Care at Home
            </h2>
            <div className="space-y-4 text-[15px] sm:text-base text-gray-600 leading-relaxed">
              <p>
                At <strong className="text-gray-900 font-semibold">Reliable Home Healthcare, Inc.</strong> in
                Aurora, Colorado, we focus on delivering professional care designed to strengthen
                independence and support overall well-being at home.
              </p>
              <p>
                Our mission is to provide consistent, patient-centered services guided by integrity,
                expertise, and dependable care practices. Our team of licensed nurses, therapists, and
                trained caregivers ensures that each patient receives attentive, individualized
                support with respect and professionalism.
              </p>
              <p>
                From skilled nursing to therapy and home assistance, we are committed to delivering
                reliable healthcare solutions that allow patients to remain engaged and independent
                in familiar surroundings.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {["Integrity", "Compassion", "Excellence"].map((value) => (
                <span
                  key={value}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold border border-gray-200 text-gray-700"
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(174 52% 42%)" }} />
                  {value}
                </span>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-5 gap-3">
            <div className="col-span-3 rounded-2xl overflow-hidden">
              <img
                src="https://ext.same-assets.com/3731215526/1326121307.jpeg"
                alt="Senior with caregiver"
                className="w-full h-full object-cover aspect-[3/4]"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-3">
              <div
                className="rounded-2xl p-5 flex flex-col justify-end aspect-square"
                style={{ backgroundColor: "hsl(174 52% 42%)" }}
              >
                <p className="text-white/70 text-[11px] uppercase tracking-wider mb-0.5">Established</p>
                <p className="text-3xl font-bold text-white">2008</p>
              </div>
              <div className="rounded-2xl overflow-hidden flex-1">
                <img
                  src="https://ext.same-assets.com/3731215526/3365292980.jpeg"
                  alt="Home healthcare professional"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
