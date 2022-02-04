import { styled } from "@mui/material/styles";
import React from "react";
import DashboardDialog from "src/components/dashboard/DashboardDialog";
import Menu from "src/components/design/Menu";
import ScottyLabsHeader from "src/components/design/ScottyLabsHeader";
import WaveBackground from "src/components/design/WaveBackground";
import AboutSection from "src/components/sections/AboutSection";
import FAQSection from "src/components/sections/FAQSection";
import Footer from "src/components/sections/Footer";
import SpeakerSection from "src/components/sections/SpeakerSection";
import ScheduleSection from "src/components/sections/ScheduleSection";
import SponsorsSection from "src/components/sections/SponsorsSection";

const DialogContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const SectionContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

export default function Home() {
  return (
    <>
      <WaveBackground />
      <Menu />
      <div>
        <ScottyLabsHeader />
        <DialogContainer>
          <DashboardDialog />
        </DialogContainer>
      </div>
      <SectionContainer>
        <AboutSection />
        <ScheduleSection />
        <SpeakerSection />
        <FAQSection />
        <SponsorsSection />
        <Footer />
      </SectionContainer>
    </>
  );
}
