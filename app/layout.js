import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./component/header";
import Footer from "./component/footer";



export const metadata = {
  title: "Que Faire à Paris ? - Evènements et activités",
  description: "Que Faire à Paris ? - Evènements et activités",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/> {/* importer header pour toutes les pages */}
        <main>{children}</main>  {/* contenu dynamique */}
        <Footer/> {/* importer footer pour toutes les pages */}
      </body>
    </html>
  );
}
