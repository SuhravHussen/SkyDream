import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Image
        src={
          "/images/coming-soon-typography-style-vector_53876-56732-removebg-preview.png"
        }
        height={200}
        width={200}
        alt="not_found"
        style={{
          height: "auto",
        }}
      />
    </div>
  );
}
