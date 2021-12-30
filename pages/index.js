import React from "react";
import { styled } from "@mui/material/styles";
import WaveBackground from "src/components/design/WaveBackground";
import ScottyLabsHeader from "src/components/design/ScottyLabsHeader";
import DashboardDialog from "src/components/dashboard/DashboardDialog";
import FAQSection from "src/components/faq/FAQSection";

const DialogContainer = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default function Home() {
  return (
    <>
      <WaveBackground />
      <div>
        <ScottyLabsHeader />
        <DialogContainer>
          <DashboardDialog />
        </DialogContainer>
      </div>
      <div>
        <FAQSection />
      </div>
    </>
  );
}
