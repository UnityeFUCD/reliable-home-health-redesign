"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = "100%";
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle("high-contrast");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          className="fixed left-4 bottom-4 z-50 w-14 h-14 rounded-full bg-zinc-900 text-white shadow-xl flex items-center justify-center hover:bg-[hsl(var(--brand-teal))] transition-all hover:scale-110 group"
          aria-label="Open accessibility menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--brand-teal))]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[hsl(var(--brand-teal))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            Accessibility Options
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Font size controls */}
          <div className="bg-zinc-50 rounded-2xl p-6">
            <h4 className="font-semibold text-zinc-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-[hsl(var(--brand-teal))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Text Size
            </h4>

            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={decreaseFontSize}
                className="w-14 h-14 text-2xl font-bold rounded-xl"
                aria-label="Decrease text size"
              >
                A-
              </Button>
              <div className="flex-1 text-center">
                <span className="text-2xl font-bold text-zinc-900">{fontSize}%</span>
              </div>
              <Button
                variant="outline"
                size="lg"
                onClick={increaseFontSize}
                className="w-14 h-14 text-2xl font-bold rounded-xl"
                aria-label="Increase text size"
              >
                A+
              </Button>
            </div>

            <Button
              variant="ghost"
              onClick={resetFontSize}
              className="w-full mt-4 text-[hsl(var(--brand-teal))]"
            >
              Reset to Default
            </Button>
          </div>

          {/* High contrast toggle */}
          <div className="bg-zinc-50 rounded-2xl p-6">
            <h4 className="font-semibold text-zinc-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-[hsl(var(--brand-teal))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Display Options
            </h4>

            <button
              onClick={toggleHighContrast}
              className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
                highContrast
                  ? "border-[hsl(var(--brand-teal))] bg-[hsl(var(--brand-teal))]/10"
                  : "border-zinc-200 hover:border-zinc-300"
              }`}
            >
              <span className="font-medium text-zinc-900">High Contrast Mode</span>
              <div className={`w-12 h-7 rounded-full transition-all ${highContrast ? "bg-[hsl(var(--brand-teal))]" : "bg-zinc-300"}`}>
                <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-all mt-1 ${highContrast ? "translate-x-6" : "translate-x-1"}`} />
              </div>
            </button>
          </div>

          {/* Quick links */}
          <div className="pt-4 border-t border-zinc-200">
            <p className="text-sm text-zinc-600 mb-3">Keyboard Navigation</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2 text-zinc-500">
                <kbd className="px-2 py-1 bg-zinc-100 rounded text-xs font-mono">Tab</kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <kbd className="px-2 py-1 bg-zinc-100 rounded text-xs font-mono">Enter</kbd>
                <span>Select</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <kbd className="px-2 py-1 bg-zinc-100 rounded text-xs font-mono">Esc</kbd>
                <span>Close</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <kbd className="px-2 py-1 bg-zinc-100 rounded text-xs font-mono">Space</kbd>
                <span>Toggle</span>
              </div>
            </div>
          </div>

          {/* Help contact */}
          <div className="bg-[hsl(var(--brand-teal))]/10 rounded-2xl p-4 text-center">
            <p className="text-sm text-zinc-700 mb-2">Need assistance?</p>
            <a
              href="tel:7206513007"
              className="font-semibold text-[hsl(var(--brand-teal))] hover:underline"
            >
              Call 720-651-3007
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
