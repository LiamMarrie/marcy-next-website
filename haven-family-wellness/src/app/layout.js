import { Inter } from "next/font/google";
import "../../public/assets/css/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Haven Family Wellness",
  description: "Haven Family Wellness Business Website Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
