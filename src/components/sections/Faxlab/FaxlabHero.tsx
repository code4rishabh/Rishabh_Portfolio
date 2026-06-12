"use client";

import React from "react";
import Link from "next/link";
import { MoveRight, Rocket } from "lucide-react";

export const FaxlabHero = () => {
  return (
    <section className="relative pt-32 pb-32 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
            <Rocket className="w-4 h-4" />
            Engineering the Future
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight text-on-surface">
            Faxlab AI: <span className="text-primary">Intelligence</span> Redefined.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            As the founder of Faxlab AI, Rishabh Agrawal bridges the gap between literary narrative and technological precision, building AI systems that don't just process data—they understand intent.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.faxlab.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold flex items-center gap-2 hover:shadow-lg transition-all"
            >
              Visit Faxlab Website
              <MoveRight className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="bg-surface text-primary px-8 py-4 rounded-md font-bold border border-outline-variant/20 hover:bg-surface-container-low transition-all"
            >
              View Documentation
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
            <img
              className="w-full h-full object-cover"
              alt="Rishabh Agrawal"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWrMmKz_rxpm22pcGhxWVxg_N7uecmsdeFHXrzX2Nmnb5krFaNvhDa6RwTwkP0cIQTIyBoaxLLYEbYn14OVZeTY_U8thEbNV6H5JHqjazRqJVhrACNYUrPVJVmw6BcGAbfRvGXwphXLhhagoJ-Pja0OSdkBfv8YvFC0JX4C3WYjYiVPWPP_qmdfkmR922gIaCclhHAgIpHL4dsEddbXsJQMNARmQEVJUkh_yAEhsObVWXixgR0n7IXkGagwacZgf7BmFDjzUI144Yc"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -top-6 -right-6 w-full h-full bg-primary-container/20 rounded-2xl -z-0"></div>
        </div>
      </div>
    </section>
  );
};
