
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sincroplan Engenharia",
  description: "Website da SincroPlan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={'${inter.className} bg-[#F9F5EE]'}>
        {children}
      </body>
    </html>
  );
}
