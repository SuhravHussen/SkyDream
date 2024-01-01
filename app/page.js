import GetInTouch from "@/components/GetInTouch/GetInTouch";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import HeroImages from "@/components/Home/HeroImages";
import Turnkey from "@/components/Turnkey/Turnkey";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HeroImages />
      <Turnkey />
      <GetInTouch />
      <WhatWeDo />
    </>
  );
}
