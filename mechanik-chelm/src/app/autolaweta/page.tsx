import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import React from "react";
import AssistanceHero from "./components/AssistanceHero";
import AssistanceOurServices from "./components/AssistanceOurServices";
import AssistanceDescription from "./components/AssistanceDescription";

type Props = {};

export const metadata = {
  title: "Pomoc drogowa Chełm - Uzarek",
  description: "Generated by create next app",
};

const page = (props: Props) => {
  return (
    <div className="box-border w-full h-full overflow-x-hidden scroll-smooth">
      <TopBar />
      <Navbar />
      <AssistanceHero />
      <AssistanceDescription />
      <AssistanceOurServices />
      <Footer />
    </div>
  );
};

export default page;
