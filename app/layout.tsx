import ThemeProviderRoot from "app/ThemeProviderRoot";
import "app/globals.css";
import "assets/styles/main.scss";

export const metadata = {
  title: "Sharebigya",
  description: "Complete solution to Nepal Stock Market Analytics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderRoot>{children}</ThemeProviderRoot>
      </body>
    </html>
  );
}
