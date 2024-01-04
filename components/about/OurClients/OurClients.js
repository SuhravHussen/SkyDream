import React from "react";
import Marquee from "react-fast-marquee";
import mit from "../../../public/images/about/clients/mit.1af911d7.png";
import princeton from "../../../public/images/about/clients/princeton.5d0a5006.png";
import hp from "../../../public/images/about/clients/download (2).png";
import ibm from "../../../public/images/about/clients/ibm.bcec6b9a.png";
import microsoft from "../../../public/images/about/clients/microsoft.4a9a93f0.png";
import bbc from "../../../public/images/about/clients/download (1).png";
import boeing from "../../../public/images/about/clients/boeing.3037b0a6.png";
import pennysylvan from "../../../public/images/about/clients/pennsylvania.8c9f4108.png";
import dell from "../../../public/images/about/clients/dell.09332c44.png";
import usNavy from "../../../public/images/about/clients/us_navy.331c47b8.png";
import Image from "next/image";
export default function OurClients() {
  const images = [
    { image: mit, text: "MIT" },
    { image: princeton, text: "Princeton" },
    { image: hp, text: "HP" },
    { image: ibm, text: "IBM" },
    { image: microsoft, text: "Microsoft" },
    { image: bbc, text: "BBC" },
    { image: boeing, text: "Boeing" },
    { image: pennysylvan, text: "Pennsylvania" },
    { image: dell, text: "Dell" },
    { image: usNavy, text: "US Navy" },
  ];

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "950px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "80px",
      }}
    >
      <p className="sectionStart">OUR CLIENTS</p>
      <Marquee>
        {images?.map((image, i) => (
          <Image
            src={image.image}
            width={60}
            height={60}
            alt={image.text}
            key={i}
            style={{
              marginRight: "20px",
              marginLeft: "20px",
              height: "auto",
            }}
          />
        ))}
      </Marquee>
    </div>
  );
}
