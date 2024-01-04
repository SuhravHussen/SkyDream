import GetInTouch from "@/components/HomePage/GetInTouch/GetInTouch";
import Header from "@/components/HomePage/Home/Header";
import Hero from "@/components/HomePage/Home/Hero";
import HeroImages from "@/components/HomePage/Home/HeroImages";
import Turnkey from "@/components/HomePage/Turnkey/Turnkey";
import WhatWeDo from "@/components/HomePage/WhatWeDo/WhatWeDo";

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
