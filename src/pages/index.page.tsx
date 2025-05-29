import Hero from "../components/main/Hero";
import Sponsors from "../components/main/Sponsors";
import Highlights from "../components/main/Highlights";
import Features from "../components/main/Features";
import OracleInfo from "../components/main/OracleInfo";
import Usage from "../components/main/Usage";
import Subscription from "../components/main/Subscription";
import Faq from "../components/main/Faq";
import Updates from "../components/main/Updates";
import Connect from "../components/main/Connect";
import { AppLayout } from "../layout";

export const Page = () => {
  return (
    <AppLayout>
      <Hero />
      <Sponsors />
      <Highlights />
      <Features />
      <OracleInfo />
      <Usage />
      <Subscription />
      <Faq />
      <Updates />
      <Connect />
    </AppLayout>
  );
};
