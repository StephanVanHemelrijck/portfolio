import Header from "./components/shared/Header";
import SidebarNavigation from "./components/shared/SidebarNavigation";
import Footer from "./components/shared/Footer";
import "./styles/main.scss";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Stephanvh._",
  description: "My personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="marginWrapper">
          <Header />
          <Footer />
          {children}
        </div>
      </body>
    </html>
  );
}
