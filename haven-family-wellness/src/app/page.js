"use client";
"use strict";

import React from "react";
import "@/app/globals.css"; // Assuming global styles import
import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import AboutSection from "../components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Haven Family Wellness Inc.</title>
        <meta name="title" content="Haven Family Wellness Inc." />
        <meta
          name="description"
          content="Business landing page built for Haven Family Wellness Inc."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <HeroSection />
      <AboutSection />

      {/* Add more sections and elements as needed, applying your CSS classes */}
    </>
  );
}
