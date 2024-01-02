import SmoothScrollClient from "@/lib/SmoothScrollClient";
import "./globals.css";
import Logo from "@/components/common/logo";
import Menu from "@/components/common/Menu/Menu";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollClient />
        <Logo />
        <Menu />
        <main>{children}</main>
      </body>
    </html>
  );
}
