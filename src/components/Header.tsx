"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "zh", name: "Chinese" },
  { code: "vi", name: "Vietnamese" },
  { code: "ko", name: "Korean" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#careers", label: "Careers" },
  { href: "#resources", label: "Resources" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="flex items-center justify-between h-[72px]" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "hsl(174 52% 42%)" }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block text-[15px] font-bold text-gray-900">Reliable Home</span>
              <span className="block text-[11px] font-medium text-gray-500 tracking-wide">Healthcare, Inc.</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop right */}
          <div className="hidden lg:flex items-center gap-3">
            <DropdownMenu open={langOpen} onOpenChange={setLangOpen}>
              <DropdownMenuTrigger className="flex items-center gap-1 px-2.5 py-1.5 text-[13px] font-medium text-gray-500 hover:text-gray-700 transition-colors rounded-md border border-gray-200">
                <span className="uppercase">{currentLang.code}</span>
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[140px] bg-white border border-gray-200 shadow-lg rounded-lg py-1">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => { setCurrentLang(lang); setLangOpen(false); }}
                    className="cursor-pointer text-[13px] text-gray-700 focus:bg-gray-50"
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="tel:7206513007" className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
              (720) 651-3007
            </a>

            <Button
              className="rounded-full text-white font-semibold px-5 h-9 text-[13px] transition-colors"
              style={{ backgroundColor: "hsl(174 52% 42%)" }}
              asChild
            >
              <Link href="#contact">Get Care Now</Link>
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              className="rounded-full text-white font-semibold px-4 h-8 text-[13px]"
              style={{ backgroundColor: "hsl(174 52% 42%)" }}
              asChild
            >
              <Link href="#contact">Get Care</Link>
            </Button>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="p-2 text-gray-600" aria-label="Open menu">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-white p-0">
                <div className="p-6">
                  <div className="flex items-center gap-2.5 mb-8">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "hsl(174 52% 42%)" }}>
                      <svg viewBox="0 0 24 24" className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <span className="text-[14px] font-bold text-gray-900">Reliable Home Healthcare</span>
                  </div>

                  <nav className="space-y-1 mb-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-2.5 text-[14px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="border-t border-gray-100 pt-6 space-y-4">
                    <a href="tel:7206513007" className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "hsl(174 52% 42%)" }}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (720) 651-3007
                    </a>
                    <Button
                      className="w-full rounded-full text-white font-semibold h-10 text-[14px]"
                      style={{ backgroundColor: "hsl(174 52% 42%)" }}
                      asChild
                    >
                      <Link href="#contact" onClick={() => setMobileOpen(false)}>Get Care Now</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}
