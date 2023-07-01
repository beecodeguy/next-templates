import ThemeProviderRoot from "app/ThemeProviderRoot";
import "app/globals.css";
import "assets/styles/main.scss";
import Nav from "components/common/Nav/Nav";
import StoreProvider from "core/hocs/StoreProvider";

export const metadata = {
  title: "Sharebigya",
  description: "Complete solution to Nepal Stock Market Analytics",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <ThemeProviderRoot>
            <Nav />
            <div className="w-full px-6 py-4">{children}</div>
          </ThemeProviderRoot>
        </StoreProvider>
      </body>
    </html>
  );
}
