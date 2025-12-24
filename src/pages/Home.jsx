import React from "react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Screenshots from "../components/Screenshots";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <div className="bg-background text-text">
      <Hero />
      <Stats />
      <Screenshots />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
}

export default Home;
