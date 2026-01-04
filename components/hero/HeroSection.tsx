"use client";

import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";

export default function HeroSection() {
  const [showFlyingBirds, setShowFlyingBirds] = useState(false);
  const [mounted, setMounted] = useState(false);

  const windowHeight =
    typeof window !== "undefined" ? window.innerHeight : 1000;
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 2000;

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFlyingBirds(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <section className="h-screen flex flex-col items-center px-4 relative pb-0">
        <div
          style={{
            marginTop: "min(120px, 12vh)",
            marginBottom: "min(16px, 1.5vh)",
          }}
        >
          <Badge icon="/assets/icons/text-bubble.svg">
            #1 iMessage Automation Tool
          </Badge>
        </div>
        <h1
          className="text-center max-w-2xl text-text-main"
          style={{
            marginBottom: "min(16px, 1.5vh)",
            fontSize: "clamp(28px, 4.5vw, 56px)",
            fontWeight: 700,
            lineHeight: "120%",
            letterSpacing: "-0.02em",
          }}
        >
          <span style={{ color: "#007AFF" }}>iMessage</span> Automation for
          Teams and AI Workflows.
        </h1>
        <p
          className="text-center max-w-xl text-text-main"
          style={{
            marginBottom: "min(32px, 3vh)",
            fontSize: "clamp(14px, 1.5vw, 18px)",
            fontWeight: 400,
            lineHeight: "130%",
            letterSpacing: "-0.02em",
          }}
        >
          Coup lets you, your team, or AI workflows send iMessages directly from
          your phone number, running securely on your Mac or Mac Mini.
        </p>
      </section>
    );
  }

  return (
    <section className="h-screen flex flex-col items-center px-5 sm:px-6 relative pb-0 overflow-hidden">
      <motion.img
        src="/assets/icons/white-cloud.svg"
        alt=""
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "auto",
          height: "auto",
          zIndex: 5,
        }}
      />
      <motion.img
        src="/assets/icons/bird.svg"
        alt=""
        initial={{ y: windowHeight, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: "42.36px",
          height: "13.96px",
          top: "251px",
          left: "118.18px",
        }}
      />
      <motion.img
        src="/assets/icons/bird.svg"
        alt=""
        initial={{ y: windowHeight, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: "42.36px",
          height: "13.96px",
          top: "289.02px",
          left: "315.3px",
        }}
      />

      <motion.img
        src="/assets/icons/bird.svg"
        alt=""
        initial={{ y: windowHeight, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: "42.36px",
          height: "13.96px",
          top: "270px",
          left: "1160.18px",
        }}
      />
      <motion.img
        src="/assets/icons/bird.svg"
        alt=""
        initial={{ y: windowHeight, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: "42.36px",
          height: "13.96px",
          top: "405px",
          left: "1230.18px",
        }}
      />

      <motion.img
        src="/assets/icons/bird-bub-1.svg"
        alt=""
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: "103.38px",
          height: "76.75px",
          bottom: "6vh",
          left: "18%",
          zIndex: 10,
        }}
      />
      <motion.img
        src="/assets/icons/bird-bub-2.svg"
        alt=""
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: "87.74px",
          height: "56.99px",
          bottom: "12vh",
          left: "34%",
          zIndex: 10,
        }}
      />
      <motion.img
        src="/assets/icons/bird-bub-3.svg"
        alt=""
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: "128.21px",
          height: "54.38px",
          bottom: "6vh",
          right: "27%",
          zIndex: 10,
        }}
      />
      <motion.img
        src="/assets/icons/bird-bub-4.svg"
        alt=""
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
        style={{
          position: "absolute",
          width: "128.93px",
          height: "101.99px",
          bottom: "6vh",
          right: "8%",
          zIndex: 10,
        }}
      />

      {showFlyingBirds && (
        <motion.img
          src="/assets/icons/bird-bub-2.svg"
          alt=""
          initial={{ x: -100, y: 400, opacity: 0 }}
          animate={{
            x: windowWidth + 100,
            y: 350,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 6,
            ease: "linear",
            opacity: {
              times: [0, 0.1, 0.9, 1],
              duration: 6,
            },
          }}
          style={{
            position: "absolute",
            width: "87.74px",
            height: "56.99px",
            zIndex: 20,
          }}
        />
      )}

      {showFlyingBirds && (
        <motion.img
          src="/assets/icons/bird-bub-3.svg"
          alt=""
          initial={{
            x: windowWidth + 100,
            y: 450,
            opacity: 0,
          }}
          animate={{
            x: -100,
            y: 400,
            opacity: [0, 1, 1, 0],
            scaleX: -1,
          }}
          transition={{
            duration: 6,
            ease: "linear",
            opacity: {
              times: [0, 0.1, 0.9, 1],
              duration: 6,
            },
          }}
          style={{
            position: "absolute",
            width: "128.21px",
            height: "54.38px",
            zIndex: 20,
          }}
        />
      )}

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          marginTop: "min(180px, 18vh)",
          marginBottom: "min(16px, 1.5vh)",
        }}
      >
        <Badge icon="/assets/icons/text-bubble.svg">
          #1 iMessage Automation Tool
        </Badge>
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center text-text-main md:px-0"
        style={{
          maxWidth: "580px",
          marginBottom: "min(16px, 1.5vh)",
          fontSize: "clamp(28px, 4.5vw, 56px)",
          fontWeight: 700,
          lineHeight: "120%",
          letterSpacing: "-0.02em",
        }}
      >
        <span style={{ color: "#007AFF" }}>iMessage</span> Automation for Teams
        and AI Workflows.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center max-w-xl text-text-main md:px-0"
        style={{
          marginBottom: "min(32px, 3vh)",
          fontSize: "clamp(14px, 1.5vw, 18px)",
          fontWeight: 400,
          lineHeight: "130%",
          letterSpacing: "-0.02em",
        }}
      >
        Coup lets you, your team, or AI workflows send iMessages directly from
        your phone number, running securely on your Mac or Mac Mini.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex items-center gap-4 flex-wrap justify-center md:px-0"
        style={{
          marginBottom: "min(32px, 3vh)",
        }}
      >
        <Button variant="primary" style={{ fontWeight: 500 }}>
          Get Started
        </Button>
        <Button variant="outline" style={{ fontWeight: 500 }}>
          <div className="flex items-center gap-2">
            <img
              src="/assets/icons/apple.svg"
              alt="Apple"
              style={{ width: "18.428571701049805px", height: "22px" }}
            />
            <div
              style={{
                width: "0px",
                height: "18px",
                borderLeft: "1px solid #6C788F",
              }}
            ></div>
            <span>Download the Mac app</span>
          </div>
        </Button>
      </motion.div>

      <div className="flex-1"></div>

      <motion.div
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="w-screen relative"
        style={{
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <img
          src="/assets/icons/cloud.svg"
          alt=""
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#1D2026",
              letterSpacing: "-0.02em",
            }}
          >
            Scroll to learn more
          </span>
          <motion.img
            src="/assets/icons/arrow-down-04.svg"
            alt="Scroll down"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: "32px", height: "32px" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
