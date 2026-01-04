"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50">
      <div
        className="bg-white/90 backdrop-blur-md rounded-[200px] w-[1200px] h-[81px] flex items-center justify-between"
        style={{
          boxShadow: "var(--shadow-nav)",
          paddingLeft: "24px",
          paddingRight: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center"
          style={{ paddingTop: "3.5px", paddingBottom: "3.5px" }}
        >
          <Image
            src="/assets/logo/coup-logo.svg"
            alt="Coup Logo"
            width={106.94}
            height={34}
            className="w-[106.94px] h-[34px]"
          />
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-text-muted hover:text-[#1D2026] transition-colors text-button"
          >
            How it Works
          </a>
          <a
            href="#"
            className="text-text-muted hover:text-[#1D2026] transition-colors text-button"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-text-muted hover:text-[#1D2026] transition-colors text-button"
          >
            Use Case
          </a>
          <a
            href="#"
            className="text-text-muted hover:text-[#1D2026] transition-colors text-button"
          >
            FAQ
          </a>
        </div>

        {/* CTA Button */}
        <motion.button
          className="
            relative
            overflow-hidden
            rounded-[43.62px]
            w-[138px]
            h-[41px]
            bg-brand
            text-white
            text-button
            font-medium
        "
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
      </div>
    </nav>
  );
}
