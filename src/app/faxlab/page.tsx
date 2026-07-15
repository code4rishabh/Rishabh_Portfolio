import React from "react";
import { FaxlabHero } from "@/components/sections/Faxlab/FaxlabHero";
import { FaxlabMission } from "@/components/sections/Faxlab/FaxlabMission";
import { FaxlabProduct } from "@/components/sections/Faxlab/FaxlabProduct";
import { FaxlabCTA } from "@/components/sections/Faxlab/FaxlabCTA";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faxlab AI – Rishabh Agrawal",
  description: "Faxlab AI, founded by Rishabh Agrawal. We are building the next generation of narrative and generative AI systems for the future of storytelling.",
};

export default function FaxlabPage() {
  return (
    <div className="relative overflow-hidden pt-16">
      <FaxlabHero />
      <FaxlabMission />
      <FaxlabProduct />
      <FaxlabCTA />
    </div>
  );
}
