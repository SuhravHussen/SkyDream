import Header from "@/components/about/Heading/Header";
import OurClients from "@/components/about/OurClients/OurClients";
import OurTeam from "@/components/about/OutTeam/OurTeam";
import WhatWeDo from "@/components/about/WhatWeDo/WhatWeDo";
import Footer from "@/components/common/Footer/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <WhatWeDo />
      <OurTeam />
      <OurClients />
      <Footer />
    </>
  );
}
