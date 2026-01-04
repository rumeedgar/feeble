"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-4 md:top-10 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] md:w-auto px-4 md:px-0">
        <div
          className="bg-white/90 backdrop-blur-md rounded-full md:rounded-[200px] w-full md:w-[min(1200px,90vw)] h-[60px] md:h-[81px] flex items-center justify-between"
          style={{
            boxShadow: "var(--shadow-nav)",
            paddingLeft: "clamp(16px, 3vw, 24px)",
            paddingRight: "clamp(16px, 3vw, 20px)",
            paddingTop: "clamp(12px, 2vh, 20px)",
            paddingBottom: "clamp(12px, 2vh, 20px)",
          }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/assets/logo/coup-logo.svg"
              alt="Coup Logo"
              className="w-[80px] h-auto md:w-[106.94px] md:h-[34px]"
            />
          </div>

          {/* Desktop Nav Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#"
              className="text-[#8C97A8] hover:text-[#1D2026] transition-colors font-medium text-sm xl:text-base"
            >
              How it Works
            </a>
            <a
              href="#"
              className="text-[#8C97A8] hover:text-[#1D2026] transition-colors font-medium text-sm xl:text-base"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-[#8C97A8] hover:text-[#1D2026] transition-colors font-medium text-sm xl:text-base"
            >
              Use Case
            </a>
            <a
              href="#"
              className="text-[#8C97A8] hover:text-[#1D2026] transition-colors font-medium text-sm xl:text-base"
            >
              FAQ
            </a>
          </div>

          {/* Desktop CTA Button - Hidden on mobile/tablet */}
          <motion.button
            className="hidden lg:flex relative overflow-hidden rounded-[43.62px] w-[120px] xl:w-[138px] h-[36px] xl:h-[41px] bg-[#007AFF] text-white font-medium text-sm xl:text-base items-center justify-center"
            initial="rest"
            animate="rest"
            whileHover="hover"
            whileTap={{ scale: 0.96 }}
            variants={{
              rest: {
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              },
              hover: {
                boxShadow: "0 8px 24px 0 rgba(0, 122, 255, 0.25)",
              },
            }}
            transition={{
              duration: 0.35,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <motion.span
              className="absolute inset-0 bg-white"
              variants={{
                rest: { x: "100%" },
                hover: { x: "0%" },
              }}
              transition={{
                duration: 0.35,
                ease: [0.4, 0, 0.2, 1],
              }}
            />

            <motion.span
              className="relative z-10"
              variants={{
                rest: { color: "#FFFFFF" },
                hover: { color: "#007AFF" },
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
            >
              Contact Sales
            </motion.span>
          </motion.button>

          {/* Hamburger Menu Button - Visible on mobile/tablet */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 5L20 5"
                stroke="#1D2026"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#1D2026"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 19L20 19"
                stroke="#1D2026"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <img
                    src="/assets/logo/coup-logo.svg"
                    alt="Coup Logo"
                    className="w-[90px] h-auto"
                  />
                  <button
                    onClick={toggleMenu}
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18"
                        stroke="#1D2026"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 6L18 18"
                        stroke="#1D2026"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-6">
                  <div className="flex flex-col gap-1 px-4">
                    <a
                      href="#"
                      className="px-4 py-3 text-[#1D2026] hover:bg-[#E6F2FF] rounded-lg transition-colors font-medium text-lg"
                      onClick={toggleMenu}
                    >
                      How it Works
                    </a>
                    <a
                      href="#"
                      className="px-4 py-3 text-[#1D2026] hover:bg-[#E6F2FF] rounded-lg transition-colors font-medium text-lg"
                      onClick={toggleMenu}
                    >
                      Pricing
                    </a>
                    <a
                      href="#"
                      className="px-4 py-3 text-[#1D2026] hover:bg-[#E6F2FF] rounded-lg transition-colors font-medium text-lg"
                      onClick={toggleMenu}
                    >
                      Use Case
                    </a>
                    <a
                      href="#"
                      className="px-4 py-3 text-[#1D2026] hover:bg-[#E6F2FF] rounded-lg transition-colors font-medium text-lg"
                      onClick={toggleMenu}
                    >
                      FAQ
                    </a>
                  </div>
                </nav>

                {/* CTA Button */}
                <div className="p-6 border-t border-gray-100">
                  <button className="w-full h-12 bg-[#007AFF] text-white rounded-full font-medium text-base hover:opacity-90 transition-opacity">
                    Contact Sales
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
